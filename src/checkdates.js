import { parse, isBefore } from 'date-fns';
import { nodes } from './domNodes';

const checkdates = function () {
  const today = new Date();

  document.querySelectorAll('tr').forEach((row) => {
    const dateCell = row.querySelector('.cell-date');
    if (!dateCell) {
      return;
    }
    const rawDate = dateCell.textContent;
    const parsedDate = parse(rawDate, 'dd-MM-yyyy', new Date());

    if (isBefore(parsedDate, today)) {
      row.remove();
      nodes.passedExamsBody.appendChild(row);
      row.setAttribute('class', 'passed');
    }
  });

  /*
  const now = new Date();



    // Extract date string, e.g., "Zo 01-06-2025" → "01-06-2025"
    const rawDate = dateCell.textContent.trim().split(' ')[1];
    if (!rawDate) return;

    // Parse to JS date
    const parsedDate = parse(rawDate, 'dd-MM-yyyy', new Date());

    // Compare
    if (isBefore(parsedDate, now)) {
      row.style.color = 'gray';
      row.style.textDecoration = 'line-through';
    }
  });
    */
};

export { checkdates };
