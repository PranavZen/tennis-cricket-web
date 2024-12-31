import "../../components/profilePageSection/profilePage.scss";
import { infoTable } from "../../mockdata/profilePageMockdata/StatsTabMockdata";
const ProfileTab = () => {
  return (
    <div className="table-container">
      <table className="info-table">
        <tbody>
          {infoTable.map((item, index) => (
            <tr key={index} className="table-row">
              <th className="table-header">{item.label}</th>
              <td className="table-data">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProfileTab;


