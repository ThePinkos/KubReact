function Den({ den, calendarArray, isVikend }) {
  return (
    <div className={`den ${isVikend}`}>
      <div className="datum">{calendarArray[den].date}</div>
      <div className="info">{calendarArray[den].dayName}</div>
    </div>
  );
}

export default Den;
