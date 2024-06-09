import '../styles/rendercv.css';
import formatDate from './form-components/format';

export default function RenderCV({
  generalData,
  educationalData,
  practicalData,
}) {
  const renderEducational = educationalData.map((d) => {
    const length = educationalData.length;
    return (
      <div key={d.id} className='section-container'>
        <p className='degree-text'>{d.degree}</p>
        <p className='blue-font'>{d.school}</p>
        <div className='date-container'>
          <p>{formatDate(d.start)}</p>
          <p>-</p>
          <p>{d.current ? 'Present' : formatDate(d.end)}</p>
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
      <div key={d.id} className='section-container'>
        <p className='position-text'>{d.position}</p>
        <p className='blue-font'>{d.company}</p>
        <div className='date-container'>
          <p>{formatDate(d.start)}</p>
          <p>-</p>
          <p>{d.current ? 'Present' : formatDate(d.end)}</p>
        </div>
        <p>{d.duties}</p>
        {practicalData.indexOf(d) < length - 1 && (
          <div className='decorative-grey-line'></div>
        )}
      </div>
    );
  });

  return (
    <div className='cv-container'>
      <div className='section-container'>
        <h1 className='general-heading'>{generalData.name}</h1>
        <p>{generalData.phone}</p>
        <p>{generalData.email}</p>
      </div>
      <h2 className='experience-heading'>Experience</h2>
      <div className='decorative-blue-line'></div>
      {renderPractical}
      <h2 className='education-heading'>Education</h2>
      <div className='decorative-blue-line'></div>
      {renderEducational}
    </div>
  );
}
