import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  Input,
  Typography,
  IconButton,
  Select,
} from "@mui/material";
import CropIcon from "@mui/icons-material/CropOriginal";
import SubIcon from "@mui/icons-material/Subject";
import MenuItem from "@mui/material/MenuItem";
import { FiCheckSquare } from "react-icons/fi";
import Radio from "@mui/icons-material/Radio";
import CloseIcon from "@mui/icons-material/Close";
import { FcRightUp } from "react-icons/fc";
import { BsTrash } from "react-icons/bs";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterIcon from "@mui/icons-material/FilterNone";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { RxSwitch } from "react-icons/rx";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TfiHandDrag } from "react-icons/tfi";
import axios from 'axios'
import { useParams } from "react-router-dom";

import "./Qus.css";

function Qus() {
  const [qus, setQus] = useState([
    {
      qusText: "What is the capital city of Bangladesh?",
      qusType: "radio",
      options: [
        { optionText: "Dhaka" },
        { optionText: "Chittagong" },
        { optionText: "Sylhet" },
        { optionText: "Khulna" },
      ],
      answer: false,
      answerKey: "",
      points: 0,
      open: true,
      required: false,
    },
  ]);
  const [documentName,setDocName] = useState("Untitled Doc")
  const [documentDesc,setDocDesc] = useState("Untitled Desc")


  function changeQus(text, i) {
    var newQus = [...qus];
    newQus[i].qusText = text;
    setQus(newQus);
    console.log(newQus);
  }

  function addQustionType(i, type) {
    let qs = [...qus];
    console.log(type);

    qs[i].qusType = type;
    setQus(qs);
  }

  function removeOpti(i, j) {
    var RemoveOptQus = [...qus];
    if (RemoveOptQus[i].options.length > 1) {
      RemoveOptQus[i].options.splice(j, 1);
      setQus(RemoveOptQus);
      console.log(i + "__" + j);
    }
  }

  function addOpti(i) {
    var opOfQus = [...qus];
    if (opOfQus[i].options.length < 5) {
      opOfQus[i].options.push({
        optionText: "option" + (opOfQus[i].options.length + 1),
      });
    } else {
      console.log("max 5 option");
    }
    setQus(opOfQus);
  }

  function copyQus(i) {
    expandcloseAll();
    let qs = [...qus];
    var newQus = { ...qs[i] };
    setQus([...qus, newQus]);
  }

  function deletQus(i) {
    let qs = [...qus];
    if (qus.length > 1) {
      qs.splice(i, 1);
      setQus(qs);
    }
  }

  function requQues(i) {
    var reqQue = [...qus];
    reqQue[i].required = !reqQue[i].required;

    console.log(reqQue[i].required + "" + i);
    setQus(reqQue);
  }

  function addNewQus() {
    expandcloseAll();
    setQus([
      ...qus,
      {
        qusText: "qus",
        qusType: "radio",
        options: [{ optionText: "option 1" }],
        open: true,
        required: false,
      },
    ]);
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    var itemgg = [...qus];
    const itemF = reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );
    setQus(itemF);
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  function expandcloseAll() {
    let qs = [...qus];
    for (let j = 0; j < qs.length; j++) {
      qs[j].open = false;
    }
    setQus(qs);
  }

  function handleExpand(i) {
    let qs = [...qus];
    for (let j = 0; j < qs.length; j++) {
      if (i === j) {
        qs[i].open = true;
      } else {
        qs[j].open = false;
      }
    }
    setQus(qs);
  }

  function setOpAns(ans, qno) {
    var Quse = [...qus];
    Quse[qno].answerKey = ans;
    setQus(Quse);
    console.log(qno + "" + ans);
  }

  function setOpPoint(points, qno) {
    var Quse = [...qus];
    Quse[qno].points = points;
    setQus(Quse);
    console.log(qno + "" + points);
  }

  function doneAns(i) {
    var ansQue = [...qus];
    ansQue[i].answer = !ansQue[i].answer;
    setQus(ansQue);
  }

  function addAns(i) {
    var ansQue = [...qus];
    ansQue[i].answer = !ansQue[i].answer;
    setQus(ansQue);
  }

  const {id}=useParams();

  function comitToDB(){
    axios.post(`http://localhost:3001/form/${id}`,{
      "doc_name": documentName,
      "doc_desc": documentDesc,
      "qustion": qus,
    })    
  }

  function qusUI() {
    return qus.map((ques, i) => (
      <Draggable key={i} draggableId={i + "id"} index={i}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <div style={{ marginBottom: "0px" }}>
                <div style={{ width: "100%", marginBottom: "0px" }}>
                  <TfiHandDrag
                    style={{
                      transform: "rotate(-90deg",
                      color: "#dae0e2",
                      position: "relative",
                      left: "300px",
                    }}
                    fontSize="small"
                  />
                </div>
                <div key={i}>
                  <Accordion
                    expanded={ques.open}
                    onChange={() => {
                      handleExpand(i);
                    }}
                    className={ques.open ? "add border" : ""}
                  >
                    <AccordionSummary
                      aria-controls="panel-content"
                      id="panel-header"
                      elevation={1}
                    >
                      {!ques.open && (
                        <div className="saved">
                          <Typography variant="body2" className="question-text">
                            {i + 1}. {ques.qusText}
                          </Typography>
                          {ques.options.map((op, j) => (
                            <FormControlLabel
                              key={j}
                              disabled
                              control={
                                <input type={ques.qusType} color="primary" />
                              }
                              label={
                                <Typography className="option-text">
                                  {op.optionText}
                                </Typography>
                              }
                            />
                          ))}
                        </div>
                      )}
                    </AccordionSummary>

                    <div className="qus-box">
                      {!ques.answer?(
                      <AccordionDetails className="add-qus">
                        <div className="addquto">
                          <Input
                            type="text"
                            className="quset"
                            placeholder="Question"
                            value={ques.qusText}
                            onChange={(e) => {
                              changeQus(e.target.value, i);
                            }}
                          />
                          <CropIcon className="crop-icon" />
                          <Select className="select" defaultValue="">
                            <MenuItem
                              value="text"
                              onClick={() => {
                                addQustionType(i, "text");
                              }}
                            >
                              <SubIcon /> Paragraph
                            </MenuItem>
                            <MenuItem
                              value="checkbox"
                              onClick={() => {
                                addQustionType(i, "checkbox");
                              }}
                            >
                              <FiCheckSquare /> Short Question
                            </MenuItem>
                            <MenuItem
                              value="radio"
                              onClick={() => {
                                addQustionType(i, "radio");
                              }}
                            >
                              <Radio /> Multiple Choice
                            </MenuItem>
                          </Select>
                        </div>

                        {ques.options.map((op, j) => (
                          <div className="addqubo" key={j}>
                            <input
                              type={ques.qusType}
                              className="option-input"
                            />
                            <Input
                              type="text"
                              className="text-input"
                              placeholder="Option"
                              value={op.optionText}
                              onChange={(e) => {
                                const updatedOptions = [...ques.options];
                                updatedOptions[j].optionText = e.target.value;
                                setQus((prev) =>
                                  prev.map((q, index) =>
                                    index === i
                                      ? { ...q, options: updatedOptions }
                                      : q
                                  )
                                );
                              }}
                            />
                            <CropIcon className="crop-icon" />
                            <IconButton>
                              <CloseIcon
                                onClick={() => {
                                  removeOpti(i, j);
                                }}
                              />
                            </IconButton>
                          </div>
                        ))}

                        {ques.options.length < 5 && (
                          <div className="adquebo">
                            <FormControlLabel
                              disabled
                              control={
                                <input type={ques.qusType} color="primary" />
                              }
                              label={
                                <div>
                                  <input
                                    type="text"
                                    className="text-input"
                                    placeholder="Add new"
                                  />
                                  <Button
                                    size="small"
                                    onClick={() => {
                                      addOpti(i);
                                    }}
                                  >
                                    Add Option
                                  </Button>
                                </div>
                              }
                            />
                          </div>
                        )}

                        <div className="adfo">
                          <div>
                            <Button size="small" onClick={()=> {addAns(i)}}>
                              <FcRightUp /> Ans
                            </Button>
                          </div>
                          <div className="actions">
                            <IconButton
                              onClick={() => {
                                copyQus(i);
                              }}
                            >
                              <FilterIcon />
                            </IconButton>
                            <IconButton
                              onClick={() => {
                                deletQus(i);
                              }}
                            >
                              <BsTrash />
                            </IconButton>
                            <span
                              style={{ color: "#5f6368", fontSize: "15px" }}
                            >
                              {" "}
                            </span>{" "}
                            <RxSwitch
                              color="primary"
                              onClick={() => {
                                requQues(i);
                              }}
                            ></RxSwitch>
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                          </div>
                        </div>
                      </AccordionDetails>
                      ):(
                      <AccordionDetails className="add-qus">
                        <div top_header>choose answer</div>
                     
                          <div className="addquto">
                            <input
                              type="text"
                              className="quset"
                              placeholder="Question"
                              value={ques.qusText}
                              disabled
                            />
                            <input type="number" className="points" min="0" step="1" placeholder="0" onChange={(e)=>{setOpPoint(e.target.value, i)}} />
                          </div>
                          {ques.options.map((op, j) => (
                          <div className="addqubo" key={j}>
                            <div key={j}>
                            <div style={{display:'flex'}} className="">
                              <div className="form_check">
                                <label style={{fontSize:"13px"}} onClick={()=> {setOpAns(ques.options[j].optionText, i)}}>  
                                {(ques.qusType!=='text')?(
                              <input type={ques.qusType} name={ques.qusText} value="option3" className="foChIn" required={ques.required} />):(  
                               <TextFieldsIcon/>)}
                               {ques.options[j].optionText}
                                </label>
                              </div>
                            </div>
                          </div>
                          </div>
                        ))}

                        <div className="addqubo">
                          <Button size="small" style={{textTransform:'none', color:"#4285f4", fontSize:"15px", fontWeight:"600"}}>
                          <TextFieldsIcon/> add ans feedaback
                          </Button></div>
                        <div className="adQubo">
                            <Button variant="outlined" color="primary" style={{textTransform:'none', color: '#4285f4', fontSize:'15px', marginTop:'10px', fontWeight:'600'}} onClick={()=> {doneAns(i)}}>
                            done
                            </Button>
                        </div>
                      </AccordionDetails>
                      )}
                     {!ques.answer ? (<div className="qusedit">
                        <AddCircleOutlineIcon
                          className="edit"
                          onClick={() => {
                            addNewQus();
                          }}
                        />
                        <OndemandVideoIcon className="edit" />
                        <CropIcon className="edit" />
                        <TextFieldsIcon className="edit" />
                      </div>):"" }
                    </div>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    ));
  }

  return (
    <div className="qusForm">
      <div className="section">
        <div className="qustise">
          <div className="qusFoTo">
            <input
              type="text"
              className="qusFoNa"
              placeholder="Untitled document"
              onChange={(e)=>{setDocName(e.target.value)}}
            />
            <input
              type="text"
              className="qusFoDe"
              placeholder="Form Description"
              onChange={(e)=>setDocDesc(e.target.value)}
            />
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="dropable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {qusUI()}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="save_form">
            <Button variant="contained" color="primary" onClick={comitToDB} >save</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qus;
