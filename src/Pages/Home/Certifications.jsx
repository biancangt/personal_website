import data from "../../data/index.json";

export default function Certification() {
  return (
    <section className="certification--section" id="certification">
      <div className="certification--container-box">
        <div className="certification--container">
          <p className="sub--title"></p>
          <h2 className="section--heading">Education</h2>
        </div>
      </div>
      <div className="certification--section--container">
        {data?.certification?.map((item) => (
          <div key={item.id} className="certification--section--card">
            <div className="certification--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="certification--section--card--content">
              <div>
                <h3 className="certification--section--title">{item.title}</h3>
                {item.school && (
                  <p className="certification--section--school">{item.school}</p>
                )}
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
