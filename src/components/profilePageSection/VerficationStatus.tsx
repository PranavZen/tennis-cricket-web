import "../../components/profilePageSection/profilePage.scss";

const VerificationStatus = () => {
  const players = [
    { id: 1, name: 'John Smith', videoDetails: 'Bowling highlights', status: 'Approved', comment: 'Good performance' },
    { id: 2, name: 'Alice Johnson', videoDetails: 'Batting practice', status: 'Pending', comment: 'Requires review' },
    { id: 3, name: 'Michael Lee', videoDetails: 'Match-winning shot', status: 'Rejected', comment: 'Quality not adequate' },
    { id: 4, name: 'Sarah Davis', videoDetails: 'Fielding techniques', status: 'Approved', comment: 'Excellent skills' },
    { id: 5, name: 'David Brown', videoDetails: 'Pre-match interview', status: 'Pending', comment: 'Edit required' },
  ];

  return (
    <div className="verification-status">
      <table className="status-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name of the Player</th>
            <th>Video Details</th>
            <th>Status</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.videoDetails}</td>
              <td className={`status ${player.status.toLowerCase()}`}>{player.status}</td>
              <td>{player.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerificationStatus;
