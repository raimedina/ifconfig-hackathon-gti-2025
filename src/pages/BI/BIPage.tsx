import Title from '../../components/title/Title'
import './BIPage.css'

function BIPage() {
  return (
    <div className="dashboard-container">
      <Title text="Dashboard BI" />

      <div className="sub-title">
        <h1>Dashboard Power BI</h1>
      </div>

      <div className="powerbi-frame">
      <iframe title="hackaton_GMOC" src="https://app.powerbi.com/view?r=eyJrIjoiMGI4ZTE1M2MtMTk4NC00MDcxLWFlMWEtZTI0MjEzMDYzZDEyIiwidCI6Ijc1ZjlmM2VmLTkyYmMtNGViMS05YTNhLTQzYWJkZmE1OTY2ZSJ9" frameBorder="0" allowFullScreen={true}></iframe>
      </div>
    </div>
  );
}

export default BIPage;