export function formatDate(dateBurning: string): string {
    const dateObj = new Date(dateBurning);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}`;
}