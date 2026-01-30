import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./Filters.module.css";

function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Tabs
      value={selectedFilterIndex}
      onChange={handleChange}
      TabIndicatorProps={{
        style: {
          backgroundColor: "var(--color-primary)",
        },
      }}
    >
      {filters.map((ele, idx) => (
        <Tab
          key={idx}
          className={styles.tab}
          label={ele.label}
          {...a11yProps(idx)}
        />
      ))}
    </Tabs>
  );
}

export default Filters;
