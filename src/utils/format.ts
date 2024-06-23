export function formatDate(date: Date): string {
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1; // getMonth()は0から始まるため、1を加えて調整する
  const day: number = date.getDate();

  // 月と日が1桁の場合は前に0をつける
  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;
  const formattedDay: string = day < 10 ? `0${day}` : `${day}`;

  // フォーマットした日付を返す
  return `${year}-${formattedMonth}-${formattedDay}`;
}
