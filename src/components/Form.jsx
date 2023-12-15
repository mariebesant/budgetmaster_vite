import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./fonts/fonts.css";
import { MenuItem } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import Button from "@mui/material/Button";

function getDate() {
  const heute = new Date();
  const tag = heute.getDate();
  const monat = heute.getMonth() + 1;
  const jahr = heute.getFullYear();

  return `${tag < 10 ? "0" + tag : tag}/${
    monat < 10 ? "0" + monat : monat
  }/${jahr}`;
}

const isFilled = (value) => {
  if (value == null || value == "") {
    return "#E1E1E1";
  }
  return "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB) 1";
};

const Form = () => {
  const [description, setDescription] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [category, setCategory] = useState();
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(getDate());
  const [comment, setComment] = useState();

  const formatAmount = (amount) => {
    return (Number(amount) / 100).toFixed(2);
  };

  const handleAmountChange = (event) => {
    console.log("handleAmountChange aufgerufen");
    let input = event.target.value;
    let amount = input.replace(".", "");
    if (event.nativeEvent.inputType === "deleteContentBackward") {
      amount = amount.slice(0, -1); // Entfernt das letzte Zeichen
    }
    setAmount(amount);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "99%" },
        background: "#1D1D1D",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          sx={textfield(description)}
          required
          label="Bezeichnung"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          sx={textfield(categoryValue)}
          id="outlined-select-currency"
          select
          required
          label="Transaktionsart"
          value={categoryValue}
          onChange={(event) => setCategoryValue(event.target.value)}
        >
          {categoriesValue.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={textfield(category)}
          id="outlined-select-currency"
          select
          required
          label="Kategorie"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          label="Betrag"
          id="outlined-end-adornment"
          sx={textfield(String(amount))}
          InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>,
          }}
          value={String(formatAmount(amount))}
          onChange={handleAmountChange}
        />
        <TextField
          sx={textfield(date)}
          required
          id="outlined-required"
          label="Datum"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <TextField
          sx={textfield(comment)}
          required
          id="outlined-multiline-flexible"
          label="Kommentar"
          multiline
          maxRows={4}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <Button style={buttonStyle} onClick={() => console.log(comment)}>
        Text
      </Button>
    </Box>
  );
};

const categories = [
  {
    label: "Lebensmittel",
  },
  {
    label: "Wohnen",
  },
  {
    label: "Freizeit",
  },
  {
    label: "Gehalt",
  },
  {
    label: "sonstie Einnahme",
  },
  {
    label: "sonstige Ausgabe",
  },
];

const categoriesValue = [
  {
    label: "Ausgabe",
  },
  {
    label: "Einnahme",
  }
];

const buttonStyle = {
  fontFamily: "Avenir Next LT Pro",
  color: "#E1E1E1",
  width: "125px",
  height: "40px",
  textAlign: "center",
  border: "0px solid",
  backgroundImage: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB) 1",
  borderRadius: "5px",
  background: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB)",
  marginRight: "30px",
  cursor: "pointer", 
}

const textfield = (value) => ({
  m: 1,
  width: "25ch",
  "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon ": {
    //Pfleil beim Dropdown
    color: "#E1E1E1",
  },
  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input ":
    {
      //Ausgewählte Werte
      color: "#E1E1E1",
      fontFamily: "Avenir Next LT Pro",
    },
  "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
    //Placeholder wird oben zum HelpText solang man es auswählt
    color: "#E1E1E1",
    fontFamily: "Avenir Next LT Pro",
  },
  "& .css-1pnmrwp-MuiTypography-root": {
    //Euro
    color: "#E1E1E1",
    fontFamily: "Avenir Next LT Pro",
  },
  "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
    //HelpText
    color: "#E1E1E1",
    fontFamily: "Avenir Next LT Pro",
  },
  "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
    //Placeholder
    fontFamily: "Avenir Next LT Pro",
    background: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  "& .MuiOutlinedInput-root": {
    //Border (farbe)
    "& fieldset": {
      //(farbe) solang es nicht ausgewählt ist
      borderRadius: "0px",
      borderImage: isFilled(value), //verwendet je nach passendem return
      borderColor: isFilled(value),
    },
    "&:hover fieldset": {
      //(farbe) während hover
      borderColor: "#A7A7A7",
      borderRadius: "0px",
    },
    "&.Mui-focused fieldset": {
      //(farbe) während es ausgewählt ist
      borderImage: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB) 1",
    },
  },
  "& .MuiInputBase-root .MuiInputBase-input": {
    // Text der eingetragen wurde
    color: "#fff",
    fontFamily: "Avenir Next LT Pro",
  },
});

export default Form;
