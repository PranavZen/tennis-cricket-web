import React from "react";
import { useFormikContext, Field, FieldArray } from "formik";
import "../../../../components/profilePageSection/profilePage.scss";
import { Link } from "react-router-dom";

interface YouTubeLinkTabProps {
  matchIndex: number;
  onPrev: () => void;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}

const YouTubeLinkForm: React.FC<YouTubeLinkTabProps> = ({
  matchIndex,
  onPrev,
  onSubmit,
}) => {
  const formik = useFormikContext<any>();
  const match = formik.values.matches[matchIndex];

  const handleAddYouTubeLink = () => {
    const newLinks = [
      ...match.youtube_link,
      { link: "", timestamps: [{ from: "", to: "", remark: "" }] },
    ];
    formik.setFieldValue(`matches[${matchIndex}].youtube_link`, newLinks);
  };

  const handleRemoveYouTubeLink = (youtubeIndex: number) => {
    const newLinks = [...match.youtube_link];
    newLinks.splice(youtubeIndex, 1);
    formik.setFieldValue(`matches[${matchIndex}].youtube_link`, newLinks);
  };

  const handleAddTimestamp = (youtubeIndex: number) => {
    const updatedLinks = [...match.youtube_link];
    updatedLinks[youtubeIndex].timestamps.push({
      from: "",
      to: "",
      remark: "",
    });
    formik.setFieldValue(`matches[${matchIndex}].youtube_link`, updatedLinks);
  };

  const handleRemoveTimestamp = (
    youtubeIndex: number,
    timestampIndex: number
  ) => {
    const updatedLinks = [...match.youtube_link];
    updatedLinks[youtubeIndex].timestamps.splice(timestampIndex, 1);
    formik.setFieldValue(`matches[${matchIndex}].youtube_link`, updatedLinks);
  };

  return (
    <div className="form-container">
      <FieldArray name={`matches[${matchIndex}].youtube_link`}>
        {() => (
          <>
            {match.youtube_link?.map(
              (
                entry: {
                  link: string;
                  timestamps: { from: string; to: string; remark: string }[];
                },
                youtubeIndex: number
              ) => (
                <div key={youtubeIndex} className="youtube-link">
                  <div className="row">
                    <div className="col-md-12">
                      <label>YouTube Link</label>
                      <Field
                        name={`matches[${matchIndex}].youtube_link[${youtubeIndex}].link`}
                        type="text"
                        placeholder="Add YouTube link"
                        className="input-box"
                      />
                    </div>

                    <div className="col-md-12 text-end">
                      {youtubeIndex > 0 && (
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemoveYouTubeLink(youtubeIndex);
                          }}
                          className="link"
                        >
                          - Remove YouTube Link
                        </Link>
                      )}
                      {youtubeIndex === match.youtube_link.length - 1 && (
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddYouTubeLink();
                          }}
                          className="link"
                        >
                          + Add YouTube Link
                        </a>
                      )}
                    </div>

                    <FieldArray
                      name={`matches[${matchIndex}].youtube_link[${youtubeIndex}].timestamps`}
                    >
                      {() => (
                        <>
                          {entry.timestamps?.map(
                            (timestamp, timestampIndex) => (
                              <div key={timestampIndex} className="timestamp">
                                <div className="row">
                                  <div className="col-md-4">
                                    <label>Timestamp From</label>
                                    <Field
                                      name={`matches[${matchIndex}].youtube_link[${youtubeIndex}].timestamps[${timestampIndex}].from`}
                                      type="text"
                                      placeholder="Enter start time (HH:MM:SS)"
                                      className="input-box"
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <label>Timestamp To</label>
                                    <Field
                                      name={`matches[${matchIndex}].youtube_link[${youtubeIndex}].timestamps[${timestampIndex}].to`}
                                      type="text"
                                      placeholder="Enter end time (HH:MM:SS)"
                                      className="input-box"
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <label>Remark</label>
                                    <Field
                                      name={`matches[${matchIndex}].youtube_link[${youtubeIndex}].timestamps[${timestampIndex}].remark`}
                                      type="text"
                                      placeholder="Enter remark"
                                      className="input-box"
                                    />
                                  </div>

                                  <div className="col-md-12 text-end">
                                    {timestampIndex > 0 && (
                                      <a
                                        href="#"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handleRemoveTimestamp(
                                            youtubeIndex,
                                            timestampIndex
                                          );
                                        }}
                                        className="link"
                                      >
                                        - Remove Timestamp
                                      </a>
                                    )}
                                    {timestampIndex ===
                                      entry.timestamps.length - 1 && (
                                      <a
                                        href="#"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handleAddTimestamp(youtubeIndex);
                                        }}
                                        className="link"
                                      >
                                        + Add Timestamp
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </>
                      )}
                    </FieldArray>
                  </div>
                </div>
              )
            )}
          </>
        )}
      </FieldArray>

      {/* ✅ Action Buttons at the bottom */}
      <div className="row">
        <div className="btn-style">
          <button
            className="claim-button"
            type="button"
            onClick={onPrev}
            disabled={formik.isSubmitting}
          >
            Previous
          </button>
          {matchIndex === formik.values.matches.length - 1 && (
            <button
              className="claim-button"
              type="button"
              onClick={() => onSubmit()}
              disabled={formik.isSubmitting}
            >
              Claim Score
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default YouTubeLinkForm;
