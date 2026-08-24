(function () {
  'use strict';

  const sectionId = document.querySelector('meta[name="title-id"]')?.content || '';
  const match = sectionId.match(/^pg(\d{3})_/);
  if (!match) return;

  const physicalPage = Number(match[1]);
  const section = document.querySelector('#content > section');
  if (!section) return;

  if (physicalPage >= 7 && !window.__bookStandardTypeObserver) {
    const standardizeBodyType = () => {
      const activeSection = document.querySelector('#content > section');
      if (!activeSection) return;
      const standardSize = physicalPage === 74 ? '16px' : '14.8px';
      activeSection.querySelectorAll('.adt-body, p, li, td, th').forEach((text) => {
        if (text.style.getPropertyValue('font-size') !== standardSize ||
            text.style.getPropertyPriority('font-size') !== 'important') {
          text.style.setProperty('font-size', standardSize, 'important');
        }
        if (physicalPage === 15) {
          text.style.setProperty('line-height', '1.08', 'important');
        } else if (physicalPage === 37) {
          text.style.setProperty('line-height', '1.02', 'important');
        }
      });
    };
    standardizeBodyType();
    window.__bookStandardTypeObserver = new MutationObserver(standardizeBodyType);
    window.__bookStandardTypeObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // This conversion is a static book, so suppress the ADT activity submit
  // control without changing the reader's navigation or accessibility tools.
  const suppressRuntimeSubmit = () => {
    document.querySelectorAll('button').forEach((button) => {
      if (button.textContent.trim() === 'Submit') {
        button.classList.add('book-runtime-submit');
      }
    });
  };
  suppressRuntimeSubmit();
  new MutationObserver(suppressRuntimeSubmit).observe(document.body, {
    childList: true,
    subtree: true
  });

  const styleContentsChapterLabels = () => {
    if (physicalPage !== 3 && physicalPage !== 4) return;
    section.querySelectorAll('[data-id]').forEach((element) => {
      if (element.querySelector('.book-chapter-prefix')) return;
      const chapter = element.textContent.match(/^(Chapter\s+(?:One|Two|Three|Four|Five):)(\s*.*)$/);
      if (!chapter) return;
      const prefix = document.createElement('span');
      prefix.className = 'book-chapter-prefix';
      prefix.textContent = chapter[1];
      element.replaceChildren(prefix, document.createTextNode(chapter[2]));
    });
  };

  styleContentsChapterLabels();
  if (physicalPage === 3 || physicalPage === 4) {
    new MutationObserver(styleContentsChapterLabels).observe(section, {
      childList: true,
      subtree: true
    });
  }

  if (section.dataset.bookShellReady === 'true') return;
  section.dataset.bookShellReady = 'true';

  if (physicalPage === 84) {
    section.querySelectorAll('img').forEach((diagram) => {
      diagram.style.setProperty('width', '100%', 'important');
      diagram.style.setProperty('height', '320px', 'important');
      diagram.style.setProperty('max-height', '320px', 'important');
      diagram.style.setProperty('object-fit', 'contain', 'important');
    });
  }

  section.classList.add('book-page');
  section.dataset.physicalPage = String(physicalPage);
  // Printed pages 1-46 use the book's green running footer even when their
  // page template is an activity family with a pink content heading.
  if (physicalPage >= 7 && physicalPage <= 52) {
    section.style.setProperty('--book-page-accent', '#00a651');
  }
  if (physicalPage >= 7) {
    section.classList.add('book-numbered-page');
  }

  // The cover is the only page without the standard inner-book shell.
  if (physicalPage === 1) return;

  const shell = document.createElement('div');
  shell.className = 'book-shell-decoration';
  shell.setAttribute('aria-hidden', 'true');
  shell.innerHTML = [
    '<span class="book-edge book-edge-left"></span>',
    '<span class="book-edge book-edge-right"></span>',
    '<span class="book-inner-rule book-inner-rule-left"></span>',
    '<span class="book-inner-rule book-inner-rule-right"></span>'
  ].join('');
  section.prepend(shell);

  const roman = ['', 'i', 'ii', 'iii', 'iv', 'v', 'vi'];
  const visibleNumber = physicalPage <= 6 ? roman[physicalPage] : String(physicalPage - 6);

  // Retire page-local copies of the repeated shell without deleting source markup.
  // This lets every page inherit the same measured geometry from this component.
  Array.from(section.children).forEach((element) => {
    if (element.getAttribute('aria-hidden') !== 'true') return;
    const classes = element.className || '';
    if (classes.includes('absolute') && classes.includes('inset-y-0') &&
        (classes.includes('left-0') || classes.includes('right-0'))) {
      element.classList.add('book-legacy-edge');
    }
  });

  Array.from(section.querySelectorAll('div[aria-hidden="true"]')).forEach((element) => {
    const classes = element.className || '';
    const isRotatedFooter = element.querySelector('.rotate-45') &&
      element.querySelector('[class*="bg-gradient-to-"]');
    if (((classes.includes('bottom-') || classes.includes('mt-24')) &&
        (classes.includes('bg-emerald') || classes.includes('items-center'))) ||
        isRotatedFooter) {
      element.classList.add('book-legacy-footer');
    }
  });

  Array.from(section.querySelectorAll('div, span')).forEach((element) => {
    if (element.textContent.trim() !== visibleNumber || element.children.length) return;
    // Keep the search inside the page shell. Using the generic flex wrapper here
    // can reach <body> (which is also centred flex) and hide the complete page.
    const legacyFooter = element.closest('div[aria-hidden="true"]');
    if (legacyFooter && section.contains(legacyFooter)) {
      legacyFooter.classList.add('book-legacy-footer');
    }
  });

  const footer = document.createElement('footer');
  footer.className = 'book-standard-footer';
  footer.setAttribute('aria-label', `Page ${visibleNumber}`);
  footer.innerHTML = [
    '<span class="book-footer-line"></span>',
    `<span class="book-footer-badge"><span>${visibleNumber}</span></span>`
  ].join('');
  section.append(footer);
})();
