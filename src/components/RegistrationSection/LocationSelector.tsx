import React, { useEffect } from "react";
import { Field } from "formik";

interface LocationSelectorProps {
  setFieldValue: (field: string, value: any) => void;
  values: any; // You can define a more specific type based on your form values
  states: string[]; // List of states
  cities: Record<string, string[]>; // Mapping of states to cities
  zones: Record<string, string[]>; // Mapping of cities to zones
}

const CascadingDropdown: React.FC<LocationSelectorProps> = ({
  setFieldValue,
  values,
  states,
  cities,
  zones,
}) => {
  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = event.target.value;
    setFieldValue("state", selectedState);
    setFieldValue("city", "");
    setFieldValue("zone", "");
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    setFieldValue("city", selectedCity);
    setFieldValue("zone", "");
  };

  return (
    <div className="mb-5 col-md-6">
      <label htmlFor="state">State</label>
      <Field as="select" name="state" onChange={handleStateChange} className="form-control">
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </Field>

      <label htmlFor="city">City</label>
      <Field as="select" name="city" onChange={handleCityChange} className="form-control">
        <option value="">Select City</option>
        {values.state && cities[values.state]?.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Field>

      <label htmlFor="zone">Zone</label>
      <Field as="select" name="zone" className="form-control">
        <option value="">Select Zone</option>
        {values.city && zones[values.city]?.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default CascadingDropdown;