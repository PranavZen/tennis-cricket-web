import '../../../matchStatSection/leftSide/MatchStatLeftPart';

const Scoreboard = () => {
  return (
    <section>
        <div className="table-responsive">
        <table className="tabel scorecard">
          <thead>
            <tr className="column-headers">
              <th>Player</th>
              <th>R</th>
              <th>B</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kalu* (RHB)</td>
              <td>22</td>
              <td>6</td>
              <td>4</td>
              <td>2</td>
              <td>366.67</td>
            </tr>
            <tr>
              <td>Raju (RHB)</td>
              <td>22</td>
              <td>6</td>
              <td>4</td>
              <td>2</td>
              <td>366.67</td>
            </tr>
          </tbody>
          <thead>
            <tr className="column-headers">
              <th>Player</th>
              <th>O</th>
              <th>M</th>
              <th>R</th>
              <th>W</th>
              <th>Eco</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shiva Shekhawat (RM)</td>
              <td>4</td>
              <td>0</td>
              <td>4</td>
              <td>2</td>
              <td>24.00</td>
            </tr>
            <tr>
              <td>Parveen Meena* (OB)</td>
              <td>4</td>
              <td>0</td>
              <td>4</td>
              <td>2</td>
              <td>24.00</td>
            </tr>
          </tbody>
        </table>
        </div>
    </section>
  )
}

export default Scoreboard