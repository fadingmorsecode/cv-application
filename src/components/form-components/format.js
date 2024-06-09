import { format } from 'date-fns';

export default function formatDate(date) {
  if (date === '') {
    return;
  }
  const dateObj = new Date(date);
  return format(dateObj, 'LLLL yyyy');
}
