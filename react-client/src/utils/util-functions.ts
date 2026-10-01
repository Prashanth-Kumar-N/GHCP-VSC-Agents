export const formatDate = (date: string | Date | null | undefined) => {
    if (date !== null && date !== undefined && date !== '') {
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) { month = '0' + month; }
      if (day.length < 2) { day = '0' + day; }

      return [year, month, day].join('-');
    } else {
      return '';
    }
  };

   export const setDate = (date: Date, offset: number) => {
    const d = new Date(date);
    d.setDate(d.getDate() + offset);
    return d;
  };


  export const formatDateWithOmission = (date: string | Date | null | undefined, omit: string[]) => {
    //check if date is a valid data object, if not return the date as is (handles empty string, null, undefined, and invalid date formats)
    if (date !== null && date !== undefined && date !== '' && !isNaN(new Date(date).getTime())) {
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) { month = '0' + month; }
      if (day.length < 2) { day = '0' + day; }

      const dateParts: Record<"year" | "month" | "day", string | number> = {"year": year, "month": month, "day": day};
      const dateString = Object.keys(dateParts).reduce((acc, key) => {
        if(!omit.includes(key)) {
          acc += dateParts[key as keyof typeof dateParts] + '/';          
        }
        return acc;
      },"");

      return dateString?.slice(0, -1).replace(/-00/g, '');
    } else {
      return date || '';
    }
  }