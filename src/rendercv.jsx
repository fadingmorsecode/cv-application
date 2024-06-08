export default function RenderCV({
  generalData,
  educationalData,
  practicalData,
}) {
  const renderEducational = educationalData.map((d) => {
    return (
      <div key={d.id}>
        <p>{d.school}</p>
        <p>{d.degree}</p>
        <p>{d.start}</p>
        <p>{d.current ? 'Present' : d.end}</p>
      </div>
    );
  });

  const renderPractical = practicalData.map((d) => {
    return (
      <div key={d.id}>
        <p>{d.company}</p>
        <p>{d.position}</p>
        <p>{d.duties}</p>
        <p>{d.start}</p>
        <p>{d.current ? 'Present' : d.end}</p>
      </div>
    );
  });

  return (
    <>
      <div>
        <p>{generalData.name}</p>
        <p>{generalData.email}</p>
        <p>{generalData.phone}</p>
      </div>
      {renderEducational}
      {renderPractical}
    </>
  );
}
