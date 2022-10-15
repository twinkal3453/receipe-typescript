import * as React from "react";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// type Props = {};

const checkboxJson = [
  {
    id: 1,
    name: "input1",
  },
  {
    id: 2,
    name: "input2",
  },
  {
    id: 3,
    name: "input3",
  },
  {
    id: 4,
    name: "input4",
  },
  {
    id: 5,
    name: "input5",
  },
  {
    id: 6,
    name: "input6",
  },
  {
    id: 7,
    name: "input7",
  },
  {
    id: 8,
    name: "input8",
  },
  {
    id: 9,
    name: "input9",
  },
  {
    id: 10,
    name: "input10",
  },
  {
    id: 11,
    name: "input11",
  },
  {
    id: 12,
    name: "input12",
  },
  {
    id: 13,
    name: "input13",
  },
  {
    id: 14,
    name: "input14",
  },
  {
    id: 15,
    name: "input15",
  },
  {
    id: 16,
    name: "input16",
  },
  {
    id: 17,
    name: "input17",
  },
  {
    id: 18,
    name: "input18",
  },
  {
    id: 19,
    name: "input19",
  },
  {
    id: 20,
    name: "input20",
  },
  {
    id: 21,
    name: "input21",
  },
  {
    id: 22,
    name: "input22",
  },
  {
    id: 23,
    name: "input23",
  },
  {
    id: 24,
    name: "input24",
  },
  {
    id: 25,
    name: "input25",
  },
  {
    id: 26,
    name: "input26",
  },
  {
    id: 27,
    name: "input27",
  },
  {
    id: 28,
    name: "input28",
  },
  {
    id: 29,
    name: "input29",
  },
  {
    id: 30,
    name: "input30",
  },
];

const textbox__style = {
  padding: "2rem 1rem",
};

const element__grid = {
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  alignItems: "center",
};

const style__Dilog = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  alignItems: "center",
};

const Home = () => {
  const [inputList, setInputList] = useState(checkboxJson);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e, index) => {
    console.log("Line 167", e.target.checked, index);
    const items = [...inputList];
    items[index].value = e.target.checked;
    setInputList(items);
  };

  console.log("Line 174", inputList);

  return (
    <div style={textbox__style}>
      <FormControl style={element__grid} component="fieldset">
        {checkboxJson.map((item, index) => {
          return (
            index < 17 && (
              <FormGroup key={index} aria-label="position" row>
                <FormControlLabel
                  value={item.value === undefined ? 0 : item.value}
                  checked={item.value === undefined ? 0 : item.value}
                  onChange={(e) => handleChange(e, index)}
                  control={<Checkbox />}
                  label={item.name}
                  labelPlacement="end"
                />
              </FormGroup>
            )
          );
        })}
        <p
          onClick={handleClickOpen}
          style={{ textAlign: "start", cursor: "pointer" }}
        >
          More...
        </p>
      </FormControl>

      {/* This is for full checkbox inputs listings */}
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // fullScreen={fullScreen}
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          {"Generate a question."}
        </DialogTitle>
        <DialogContent style={style__Dilog}>
          {checkboxJson.map((item, index) => {
            return (
              <FormGroup key={index} aria-label="position" row>
                <FormControlLabel
                  value={item.value === undefined ? 0 : item.value}
                  checked={item.value === undefined ? 0 : item.value}
                  onChange={(e) => handleChange(e, index)}
                  control={<Checkbox />}
                  label={item.name}
                  labelPlacement="end"
                />
              </FormGroup>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
