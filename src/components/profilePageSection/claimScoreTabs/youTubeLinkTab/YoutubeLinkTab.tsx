import React, { useEffect } from "react";
import { useFormikContext, Field, FieldArray } from "formik";
import "../../../../components/profilePageSection/profilePage.scss";

const YouTubeLinkForm = ({ tournamentIndex }: { tournamentIndex: number }) => {
  const formik = useFormikContext<any>();

  const handleAddYouTubeLink = () => {
    const newYouTubeLinks = formik.values.youtube_link ? [...formik.values.youtube_link] : [];
    if (!newYouTubeLinks[tournamentIndex]) newYouTubeLinks[tournamentIndex] = [];
    newYouTubeLinks[tournamentIndex].push({ link: "", timestamps: [{ from: "", to: "", remark: "" }] });
    formik.setFieldValue("youtube_link", newYouTubeLinks);
  };

  const handleAddTimestamp = (youtubeIndex: number) => {
    const newYouTubeLinks = formik.values.youtube_link ? [...formik.values.youtube_link] : [];
    if (!newYouTubeLinks[tournamentIndex][youtubeIndex].timestamps) newYouTubeLinks[tournamentIndex][youtubeIndex].timestamps = [];
    newYouTubeLinks[tournamentIndex][youtubeIndex].timestamps.push({ from: "", to: "", remark: "" });
    formik.setFieldValue("youtube_link", newYouTubeLinks);
  };

  return (
    <div className="tournament-form">
      <FieldArray name={`youtube_link[${tournamentIndex}]`}>
        {() => (
          <>
            {formik.values.youtube_link && formik.values.youtube_link[tournamentIndex]?.map((entry: { link: string, timestamps: { from: string, to: string, remark: string }[] }, youtubeIndex: number) => (
              <div key={youtubeIndex} className="youtube-link">
                <div className="row">
                  {/* YouTube Link Input */}
                  <div className="col-md-12">
                    <label htmlFor={`youtube_link[${tournamentIndex}][${youtubeIndex}].link`}>YouTube Link</label>
                    <Field
                      id={`youtube_link[${tournamentIndex}][${youtubeIndex}].link`}
                      name={`youtube_link[${tournamentIndex}][${youtubeIndex}].link`}
                      type="text"
                      placeholder="Add YouTube link"
                      className="input-box"
                    />
                  </div>

                  {/* Remove and Add YouTube Link Options */}
                  <div className="col-md-12 text-end">
                    {youtubeIndex > 0 && (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const newYouTubeLinks = formik.values.youtube_link ? [...formik.values.youtube_link] : [];
                          newYouTubeLinks[tournamentIndex].splice(youtubeIndex, 1);
                          formik.setFieldValue("youtube_link", newYouTubeLinks);
                        }}
                        className="link"
                      >
                        - Remove YouTube Link
                      </a>
                    )}
                    {youtubeIndex === formik.values.youtube_link[tournamentIndex].length - 1 && (
                      <a href="#" onClick={(e) => { e.preventDefault(); handleAddYouTubeLink(); }} className="link">
                        + Add YouTube Link
                      </a>
                    )}
                  </div>

                  {/* Timestamp Fields */}
                  <FieldArray name={`youtube_link[${tournamentIndex}][${youtubeIndex}].timestamps`}>
                    {() => (
                      <>
                        {formik.values.youtube_link[tournamentIndex][youtubeIndex].timestamps?.map((timestamp:any, timestampIndex:any) => (
                          <div key={timestampIndex} className="timestamp">
                            <div className="row">
                              <div className="col-md-4">
                                <label htmlFor={`youtube_link[${tournamentIndex}][${youtubeIndex}].timestamps[${timestampIndex}].from`}>Timestamp From</label>
                                <Field
                                  id={`youtube_link[${tournamentIndex}][${youtubeIndex}].timestamps[${timestampIndex}].from`}
                                  name={`youtube_link[${tournamentIndex}][${youtubeIndex}].timestamps[${timestampIndex}].from`}
                                  type="text"
                                  placeholder="Enter start time (HH:MM:SS)"
                                  className="input-box"
                                />
                              </div>
                              <div className="col-md-4">
                                <label htmlFor={`youtube_link[${tournamentIndex}][${youtubeIndex}].timestamps[${timestampIndex}].to`}>Timestamp To</label>
                                <Field
                                  id={`youtube_link[${tournamentIndex}][${youtubeIndex}].timestamps[${timestampIndex}].to`}
                                  name={`youtube_link[${tournamentIndex}][${youtubeIndex}].timestamps[${timestampIndex}].to`}
                                  type="text"
                                  placeholder="Enter end time (HH:MM:SS)"
                                  className="input-box"
                                />
                              </div>

                              <div className="col-md-4">
                                <label htmlFor={`youtube_link[${tournamentIndex}][${youtubeIndex}].timestamps[${timestampIndex}].remark`}>Remark</label>
                                <Field
                                  id={`youtube_link[${tournamentIndex}][${youtubeIndex}].timestamps[${timestampIndex}].remark`}
                                  name={`youtube_link[${tournamentIndex}][${youtubeIndex}].timestamps[${timestampIndex}].remark`}
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
                                      const newYouTubeLinks = formik.values.youtube_link ? [...formik.values.youtube_link] : [];
                                      newYouTubeLinks[tournamentIndex][youtubeIndex].timestamps.splice(timestampIndex, 1);
                                      formik.setFieldValue("youtube_link", newYouTubeLinks);
                                    }}
                                    className="link"
                                  >
                                    - Remove Timestamp
                                  </a>
                                )}
                                {timestampIndex === formik.values.youtube_link[tournamentIndex][youtubeIndex].timestamps.length - 1 && (
                                  <a href="#" onClick={(e) => { e.preventDefault(); handleAddTimestamp(youtubeIndex); }} className="link">
                                    + Add Timestamp
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </FieldArray>
                </div>
              </div>
            ))}
          </>
        )}
      </FieldArray>
    </div>
  );
};

const YouTubeLink = ({ onPrev, onSubmit }: { onPrev: () => void; onSubmit: () => void }) => {
  const formik = useFormikContext<any>();

  useEffect(() => {
    if (!Array.isArray(formik.values.youtube_link) || formik.values.youtube_link.length === 0) {
      formik.setFieldValue("youtube_link", [[{ link: "", timestamps: [{ from: "", to: "", remark: "" }] }]]);
    }
    if (!Array.isArray(formik.values.tournament_name)) {
      formik.setFieldValue("tournament_name", [""]); // Set a default array if tournament_name is not an array
    }
  }, [formik]);

  return (
    <div className="form-container">
      {formik.values.tournament_name.map((_: string, tournamentIndex: number) => (
        <div key={tournamentIndex} className="tournament-form">
          {/* <h1>{`Match ${tournamentIndex + 1}`}</h1> */}
          <YouTubeLinkForm tournamentIndex={tournamentIndex} />
          <div className="row">
            <div className="col-12 btn-style">
              <button type="button" onClick={onPrev} disabled={formik.isSubmitting}>Previous</button>
              <button type="button" onClick={() => { formik.handleSubmit(); }}>Claim Score</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YouTubeLink;
