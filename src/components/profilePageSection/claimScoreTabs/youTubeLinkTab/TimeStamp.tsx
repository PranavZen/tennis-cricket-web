import React from "react";
import { Field, FieldArray, ErrorMessage } from "formik";

interface YoutubeLinkTimestampProps {
  values: any;
  setFieldValue: any;
}

interface Timestamp {
  timestampFrom: string;
  timestampTo: string;
  playerActivity: string;
}

const TimeStamp: React.FC<YoutubeLinkTimestampProps> = ({
  values,
  setFieldValue,
}) => {
  return (
    <div>
      <FieldArray name="matchVideoLinks">
        {({ push, remove }) => (
          <>
            {values.matchVideoLinks.map((videoLink: string, index: number) => (
              <div key={index}>
                <div className="row">
                  <div className="col-md-12">
                    <label>Match Video Link {index + 1}:</label>
                    <Field
                      type="url"
                      name={`matchVideoLinks[${index}]`}
                      placeholder="Enter video link"
                      className="input-box"
                    />
                    <ErrorMessage
                      name={`matchVideoLinks[${index}]`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>

                <div className="col-md-12 text-end">
                  {index > 0 && (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        remove(index);
                      }}
                      className="link"
                    >
                      - Remove YouTube Link
                    </a>
                  )}

                  {index === values.matchVideoLinks.length - 1 && (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        push("");
                        setFieldValue("timestamps", [
                          ...values.timestamps,
                          [
                            {
                              timestampFrom: "",
                              timestampTo: "",
                              playerActivity: "",
                            },
                          ],
                        ]);
                      }}
                      className="link"
                    >
                      + Add YouTube Link
                    </a>
                  )}
                </div>

                <FieldArray name={`timestamps[${index}]`}>
                  {({ push: pushTimestamp, remove: removeTimestamp }) => (
                    <div className="timestamp-container">
                      {values.timestamps[index]?.map(
                        (timestamp: Timestamp, tsIndex: number) => (
                          <div className="row" key={tsIndex}>
                            <div className="col-md-4">
                              <label>Timestamp From:</label>
                              <Field
                                type="text"
                                name={`timestamps[${index}][${tsIndex}].timestampFrom`}
                                placeholder="(HH:MM:SS)"
                                className="input-box"
                              />
                            </div>

                            <div className="col-md-4">
                              <label>Timestamp To:</label>
                              <Field
                                type="text"
                                name={`timestamps[${index}][${tsIndex}].timestampTo`}
                                placeholder="(HH:MM:SS)"
                                className="input-box"
                              />
                            </div>

                            <div className="col-md-4">
                              <label>Player Activity:</label>
                              <Field
                                type="text"
                                name={`timestamps[${index}][${tsIndex}].playerActivity`}
                                placeholder="Enter player activity"
                                className="input-box"
                              />
                            </div>

                            <div className="col-md-12 text-end">
                              {values.timestamps[index].length > 1 &&
                                tsIndex > 0 && (
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      removeTimestamp(tsIndex);
                                    }}
                                    className="link"
                                  >
                                    - Remove Timestamp
                                  </a>
                                )}

                              {tsIndex ===
                                values.timestamps[index].length - 1 && (
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    pushTimestamp({
                                      timestampFrom: "",
                                      timestampTo: "",
                                      playerActivity: "",
                                    });
                                  }}
                                  className="link"
                                >
                                  + Add Timestamp
                                </a>
                              )}
                            </div>
                          </div>
                        )
                      )}
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

export default TimeStamp;
