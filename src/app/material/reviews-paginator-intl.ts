import { MatPaginatorIntl } from '@angular/material';

export function getReviewsPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Reviews per page:';

  return paginatorIntl;
}
