function Calendar() {
  const year = 2012;
  const calendarArray = [];

  //Zisti ci je rok prestupny a vrati 366 alebo 365
  const dayCount = () => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 366 : 365;
  };

  //Zisti kolko dni je treba pridat na zaciatok a na koniec roka aby sa zacalo v pondelok a skoncilo v nedelu
  const pocetDniDoZadu = [13, 7, 8, 9, 10, 11, 12][
    new Date(year, 0, 1).getDay()
  ];
  const pocetDniDoPredu = [7, 13, 12, 11, 10, 9, 8][
    new Date(year, 11, 31).getDay()
  ];

  //Zisti cislo dna v roku
  const getDayNumber = (date: Date) =>
    Math.floor(
      (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
        86_400_000
    );

  //vygeneruj array s objektami pre kazdy den v roku
  for (
    let day = 1 - pocetDniDoZadu;
    day <= dayCount() + pocetDniDoPredu;
    day++
  ) {
    calendarArray.push({
      dayNumber: getDayNumber(new Date(year, 0, day)),
      date: new Date(year, 0, day).toLocaleDateString("sk-SK", {
        day: "numeric",
      }),
      dayName: new Date(year, 0, day).toLocaleDateString("sk-SK", {
        weekday: "long",
      }),
    });
  }

  return (
    <div>
      <div>
        {calendarArray.map((item, index) => (
          <p key={index}>
            {item.dayNumber} ---- {item.date} -- {item.dayName}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
