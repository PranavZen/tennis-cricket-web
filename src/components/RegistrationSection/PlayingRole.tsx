import React from "react";
import { Field, ErrorMessage } from "formik";

interface PlayingRoleProps {
  playingRole: string;
  setFieldValue: (field: string, value: any) => void;
}

const PlayingRole: React.FC<PlayingRoleProps> = ({ playingRole, setFieldValue }) => {
  return (
    <>
      <div className="mb-5 col-md-6">
        <label>Playing Role</label>
        <Field
          as="select"
          className="form-select"
          name="playingRole"
          value={playingRole}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFieldValue("playingRole", e.target.value)
          }
        >
          <option value="">Select Playing Role</option>
          <option value="Batsman">Batsman</option>
          <option value="Bowler">Bowler</option>
          <option value="All-rounder">All-rounder</option>
          <option value="Wicket-keeper">Wicket-keeper</option>
        </Field>
        <div className="errorMsg">
          <ErrorMessage name="playingRole" component="div" />
        </div>
      </div>

      {/* Batting Style */}
      {(playingRole === "Batsman" || playingRole === "All-rounder") && (
        <div className="mb-5 col-md-6">
          <div className="lableIconWrap">
            <label>Batting Style</label>
            <img
              src="images/batsman (1).svg"
              alt="batsman-icon"
              width={20}
              height={20}
              className="lazy-loading"
            />
          </div>
          <Field
            as="select"
            className="form-select"
            name="battingStyle"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFieldValue("battingStyle", e.target.value)
            }
          >
            <option value="">Select Batting Style</option>
            <option value="Right-hand">Right-hand</option>
            <option value="Left-hand">Left-hand</option>
          </Field>
          <div className="errorMsg">
            <ErrorMessage name="battingStyle" component="div" />
          </div>
        </div>
      )}

      {/* Bowling Style */}
      {(playingRole === "Bowler" || playingRole === "All-rounder") && (
        <div className="mb-5 col-md-6">
          <div className="lableIconWrap">
            <label>Bowling Style</label>
            <img
              src="images/Bowler (1).svg"
              alt="bowler-icon"
              width={20}
              height={20}
              className="lazy-loading"
            />
          </div>
          <Field
            as="select"
            className="form-select"
            name="bowlingStyle"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFieldValue("bowlingStyle", e.target.value)
            }
          >
            <option value="">Select Bowling Style</option>
            <option value="Right-arm Fast">Right-arm Fast</option>
            <option value="Right-arm Medium">Right-arm Medium</option>
            <option value="Left-arm Fast">Left-arm Fast</option>
            <option value="Left-arm Medium">Left-arm Medium</option>
            <option value="Right-arm Spin">Right-arm Spin</option>
            <option value="Left-arm Spin">Left-arm Spin</option>
          </Field>
          <div className="errorMsg">
            <ErrorMessage name="bowlingStyle" component="div" />
          </div>
        </div>
      )}

      {/* Wicket Keeping */}
      {(playingRole === "Wicket-keeper" || playingRole === "All-rounder") && (
        <div className="mb-5 col-md-6">
          <div className="lableIconWrap">
            <label>Wicketkeeping</label>
            <img
              src="images/Wicketkeeper (1).svg"
              alt="gloves-icon"
              width={22}
              height={22}
              className="lazy-loading"
            />
          </div>
          <div>
            <Field type="radio" id="yes" value="yes" name="wicketKeeping" />
            <label
              htmlFor="yes"
              className="form-check-label"
              style={{ marginRight: "3rem", marginLeft: ".5rem" }}
            >
              Yes
            </label>
            <Field type="radio" id="no" value="no" name="wicketKeeping" />
            <label
              htmlFor="no"
              className="form-check-label"
              style={{ marginLeft: ".5rem" }}
            >
              No
            </label>
          </div>
          <div className="errorMsg">
            <ErrorMessage name="wicketKeeping" component="div" />
          </div>
        </div>
      )}
    </>
  );
};

export default PlayingRole;
