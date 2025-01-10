import React, { useEffect, useState } from "react";
import { useFormikContext, Field, FieldArray, ErrorMessage } from "formik";
import "../../../../components/profilePageSection/profilePage.scss";
import { Modal } from "antd";

const YouTubeLinkForm = ({ tournamentIndex }: { tournamentIndex: number }) => {
  const formik = useFormikContext<any>();

  const handleAddYouTubeLink = () => {
    const newYouTubeLinks = [...formik.values.youtube_link];
    if (!newYouTubeLinks[tournamentIndex]) newYouTubeLinks[tournamentIndex] = [];
    newYouTubeLinks[tournamentIndex].push("");
    formik.setFieldValue("youtube_link", newYouTubeLinks);

    const newTimeFrom = [...formik.values.time_from];
    if (!newTimeFrom[tournamentIndex]) newTimeFrom[tournamentIndex] = [];
    newTimeFrom[tournamentIndex].push([""]);
    formik.setFieldValue("time_from", newTimeFrom);

    const newTimeTo = [...formik.values.time_to];
    if (!newTimeTo[tournamentIndex]) newTimeTo[tournamentIndex] = [];
    newTimeTo[tournamentIndex].push([""]);
    formik.setFieldValue("time_to", newTimeTo);

    const newRemark = [...formik.values.remark];
    if (!newRemark[tournamentIndex]) newRemark[tournamentIndex] = [];
    newRemark[tournamentIndex].push([""]);
    formik.setFieldValue("remark", newRemark);
  };

  const handleAddTimestamp = (tournamentIndex: number, youtubeIndex: number) => {
    const newTimeFrom = [...formik.values.time_from];
    const newTimeTo = [...formik.values.time_to];
    const newRemark = [...formik.values.remark];

    if (!newTimeFrom[tournamentIndex][youtubeIndex]) {
      newTimeFrom[tournamentIndex][youtubeIndex] = [];
    }
    if (!newTimeTo[tournamentIndex][youtubeIndex]) {
      newTimeTo[tournamentIndex][youtubeIndex] = [];
    }
    if (!newRemark[tournamentIndex][youtubeIndex]) {
      newRemark[tournamentIndex][youtubeIndex] = [];
    }

    newTimeFrom[tournamentIndex][youtubeIndex].push("");
    newTimeTo[tournamentIndex][youtubeIndex].push("");
    newRemark[tournamentIndex][youtubeIndex].push("");

    formik.setFieldValue("time_from", newTimeFrom);
    formik.setFieldValue("time_to", newTimeTo);
    formik.setFieldValue("remark", newRemark);
  };

  return (
    <div className="tournament-form">
      <FieldArray name={`youtube_link[${tournamentIndex}]`}>
        {() => (
          <>
            {formik.values.youtube_link[tournamentIndex]?.map((link: string, youtubeIndex: number) => (
              <div key={youtubeIndex} className="youtube-link">
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor={`youtube_link[${tournamentIndex}][${youtubeIndex}]`}>YouTube Link</label>
                    <Field
                      id={`youtube_link[${tournamentIndex}][${youtubeIndex}]`}
                      name={`youtube_link[${tournamentIndex}][${youtubeIndex}]`}
                      type="text"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue(`youtube_link[${tournamentIndex}][${youtubeIndex}]`, e.target.value)}
                      value={link}
                      placeholder="Add youtube link"
                      className="input-box"
                    />
                  </div>
                  <div className="col-md-12 text-end">
                  {youtubeIndex > 0 && (
                    <a
                      href="#"
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        const newYouTubeLinks = [...formik.values.youtube_link];
                        const newTimeFrom = [...formik.values.time_from];
                        const newTimeTo = [...formik.values.time_to];
                        const newRemark = [...formik.values.remark];
                        newYouTubeLinks[tournamentIndex].splice(youtubeIndex, 1);
                        newTimeFrom[tournamentIndex].splice(youtubeIndex, 1);
                        newTimeTo[tournamentIndex].splice(youtubeIndex, 1);
                        newRemark[tournamentIndex].splice(youtubeIndex, 1);
                        formik.setFieldValue("youtube_link", newYouTubeLinks);
                        formik.setFieldValue("time_from", newTimeFrom);
                        formik.setFieldValue("time_to", newTimeTo);
                        formik.setFieldValue("remark", newRemark);
                      }}
                      className="link"
                    >
                                            - Remove YouTube Link
                    </a>
                  )}
                  {youtubeIndex === formik.values.youtube_link[tournamentIndex].length - 1 && (
                    <a
                      href="#"
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        handleAddYouTubeLink();
                      }}
                      className="link"
                    >
                      + Add YouTube Link
                    </a>
                  )}
                </div>
                </div>

                <FieldArray name={`time_from[${tournamentIndex}][${youtubeIndex}]`}>
                  {() => (
                    <div className="timestamp-container">
                      {formik.values.time_from[tournamentIndex][youtubeIndex]?.map((_: string, subIndex: number) => (
                        <div key={subIndex} className="row">
                          <div className="col-md-4">
                            <label htmlFor={`time_from[${tournamentIndex}][${youtubeIndex}][${subIndex}]`}>Time From</label>
                            <Field
                              id={`time_from[${tournamentIndex}][${youtubeIndex}][${subIndex}]`}
                              name={`time_from[${tournamentIndex}][${youtubeIndex}][${subIndex}]`}
                              type="text"
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue(`time_from[${tournamentIndex}][${youtubeIndex}][${subIndex}]`, e.target.value)}
                              value={formik.values.time_from[tournamentIndex][youtubeIndex][subIndex]}
                              placeholder="(HH:MM:SS)"
                              className="input-box"
                            />
                          </div>
                          <div className="col-md-4">
                            <label htmlFor={`time_to[${tournamentIndex}][${youtubeIndex}][${subIndex}]`}>Time To</label>
                            <Field
                              id={`time_to[${tournamentIndex}][${youtubeIndex}][${subIndex}]`}
                              name={`time_to[${tournamentIndex}][${youtubeIndex}][${subIndex}]`}
                              type="text"
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue(`time_to[${tournamentIndex}][${youtubeIndex}][${subIndex}]`, e.target.value)}
                              value={formik.values.time_to[tournamentIndex][youtubeIndex][subIndex]}
                              placeholder="(HH:MM:SS)"
                              className="input-box"
                            />
                          </div>
                          <div className="col-md-4">
                            <label htmlFor={`remark[${tournamentIndex}][${youtubeIndex}][${subIndex}]`}>Remark</label>
                            <Field
                              id={`remark[${tournamentIndex}][${youtubeIndex}][${subIndex}]`}
                              name={`remark[${tournamentIndex}][${youtubeIndex}][${subIndex}]`}
                              type="text"
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue(`remark[${tournamentIndex}][${youtubeIndex}][${subIndex}]`, e.target.value)}
                              value={formik.values.remark[tournamentIndex][youtubeIndex][subIndex]}
                              placeholder="Enter player activity"
                              className="input-box"
                            />
                          </div>

                          <div className="col-md-12 text-end">
                            {formik.values.time_from[tournamentIndex][youtubeIndex].length > 1 && subIndex > 0 && (
                              <a
                                href="#"
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                  e.preventDefault();
                                  const newTimeFrom = [...formik.values.time_from];
                                  const newTimeTo = [...formik.values.time_to];
                                  const newRemark = [...formik.values.remark];
                                  newTimeFrom[tournamentIndex][youtubeIndex].splice(subIndex, 1);
                                  newTimeTo[tournamentIndex][youtubeIndex].splice(subIndex, 1);
                                  newRemark[tournamentIndex][youtubeIndex].splice(subIndex, 1);
                                  formik.setFieldValue("time_from", newTimeFrom);
                                  formik.setFieldValue("time_to", newTimeTo);
                                  formik.setFieldValue("remark", newRemark);
                                }}
                                className="link"
                              >
                                - Remove Timestamp
                              </a>
                            )}

                            {subIndex === formik.values.time_from[tournamentIndex][youtubeIndex].length - 1 && (
                              <a
                                href="#"
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                  e.preventDefault();
                                  const newTimeFrom = [...formik.values.time_from];
                                  const newTimeTo = [...formik.values.time_to];
                                  const newRemark = [...formik.values.remark];
                                  newTimeFrom[tournamentIndex][youtubeIndex].push("");
                                  newTimeTo[tournamentIndex][youtubeIndex].push("");
                                  newRemark[tournamentIndex][youtubeIndex].push("");
                                  formik.setFieldValue("time_from", newTimeFrom);
                                  formik.setFieldValue("time_to", newTimeTo);
                                  formik.setFieldValue("remark", newRemark);
                                }}
                                className="link"
                              >
                                + Add Timestamp
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
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

  // const handleAddTournament = () => {
  //   const newYouTubeLinks = formik.values.youtube_link.concat([[""]]);
  //   const newTimeFrom = formik.values.time_from.concat([[[""]]]);
  //   const newTimeTo = formik.values.time_to.concat([[[""]]]);
  //   const newRemark = formik.values.remark.concat([[[""]]]);

  //   formik.setFieldValue("youtube_link", newYouTubeLinks);
  //   formik.setFieldValue("time_from", newTimeFrom);
  //   formik.setFieldValue("time_to", newTimeTo);
  //   formik.setFieldValue("remark", newRemark);
  //   formik.setFieldValue("tournament_name", formik.values.tournament_name.concat(""));
  //   formik.setFieldValue("team_name", formik.values.team_name.concat(""));
  //   formik.setFieldValue("season", formik.values.season.concat("1"));
  // };

  useEffect(() => {
    if (!Array.isArray(formik.values.youtube_link) || formik.values.youtube_link.length === 0) {
      formik.setFieldValue("youtube_link", [[""]]);
    }
    if (!Array.isArray(formik.values.time_from) || formik.values.time_from.length === 0) {
      formik.setFieldValue("time_from", [[[""]]]);
    }
    if (!Array.isArray(formik.values.time_to) || formik.values.time_to.length === 0) {
      formik.setFieldValue("time_to", [[[""]]]);
    }
    if (!Array.isArray(formik.values.remark) || formik.values.remark.length === 0) {
      formik.setFieldValue("remark", [[[""]]]);
    }
  }, []);

  return (
    <div className="form-container">
      {/* <div className="add-btn text-end">
        <button type="button" onClick={handleAddTournament}>
          + Add Another Tournament
        </button>
      </div> */}
      {formik.values.tournament_name.map((_: string, tournamentIndex: number) => (
        <div key={tournamentIndex} className="tournament-form">
          <div>
            <h1>{`Tournament ${tournamentIndex + 1}`}</h1>
          </div>
          <div className="row">
            {/* <div className="col-md-6">
              <label htmlFor={`tournament_name[${tournamentIndex}]`}>Tournament Name</label>
              <Field
                id={`tournament_name[${tournamentIndex}]`}
                name={`tournament_name[${tournamentIndex}]`}
                type="text"
                placeholder="Enter tournament name"
                className="input-box"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue(`tournament_name[${tournamentIndex}]`, e.target.value)}
                value={formik.values.tournament_name[tournamentIndex]}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor={`team_name[${tournamentIndex}]`}>Team Name</label>
              <Field
                id={`team_name[${tournamentIndex}]`}
                name={`team_name[${tournamentIndex}]`}
                type="text"
                placeholder="Enter team name"
                className="input-box"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue(`team_name[${tournamentIndex}]`, e.target.value)}
                value={formik.values.team_name[tournamentIndex]}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor={`season[${tournamentIndex}]`}>Season</label>
              <Field
                as="select"
                id={`season[${tournamentIndex}]`}
                name={`season[${tournamentIndex}]`}
                className="input-box"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => formik.setFieldValue(`season[${tournamentIndex}]`, e.target.value)}
                value={formik.values.season[tournamentIndex]}
              >
                <option value="">Select a season</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </Field>
            </div> */}
          </div>
          <YouTubeLinkForm tournamentIndex={tournamentIndex} />
          <div className="row">
            <div className="col-12 btn-style">
              <button type="button" onClick={onPrev} disabled={formik.isSubmitting}>
                Previous
              </button>
              <button type="button" onClick={() => { formik.handleSubmit(); onSubmit(); }}>
                Claim Score
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YouTubeLink;
