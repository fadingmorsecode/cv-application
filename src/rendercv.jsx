export default function RenderCV({
  generalData,
  educationalData,
  practicalData,
}) {
  const renderEducational = educationalData.map((d) => {
    const length = educationalData.length;
    return (
      <div key={d.id}>
        <p>{d.degree}</p>
        <p>{d.school}</p>
        <div className='date-container'>
          <p>{d.start}</p>
          <p>{d.current ? 'Present' : d.end}</p>
        </div>
        {educationalData.indexOf(d) < length - 1 && (
          <div className='decorative-grey-line'></div>
        )}
      </div>
    );
  });

  const renderPractical = practicalData.map((d) => {
    const length = practicalData.length;
    return (
      <div key={d.id}>
        <p>{d.position}</p>
        <p>{d.company}</p>
        <div className='date-container'>
          <p>{d.start}</p>
          <p>{d.current ? 'Present' : d.end}</p>
        </div>
        <p>{d.duties}</p>
        {practicalData.indexOf(d) < length - 1 && (
          <div className='decorative-grey-line'></div>
        )}
      </div>
    );
  });

  return (
    <>
      <div>
        <h1>{generalData.name}</h1>
        <p>{generalData.phone}</p>
        <p>{generalData.email}</p>
      </div>
      <h2>Experience</h2>
      <div className='decorative-blue-line'></div>
      {renderPractical}
      <h2>Education</h2>
      <div className='decorative-blue-line'></div>
      {renderEducational}
    </>
  );
}
