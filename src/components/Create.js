import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../Context";

const AddButton = styled.button`
  z-index: 5;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 30px;

  border: none;
  outline: none;

  transition: 0.125s all ease-in;

  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  ${(props) =>
    props.open &&
    css`
      &:hover {
        background: #ff8787;
      }

      &:active {
        background: #fa5252;
      }
      transform: rotate(45deg);
      color: red;
    `}
`;
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;

  transition: 0.125s all ease-in;
`;

const InsertForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #f8f0fa;
  padding: 16px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  width: 50px;
  height: 25px;
  background: #f8f0fa;
  border: 1px solid #e9ecef;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
`;

function Create() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => {
    setOpen(!open);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
        complete: false,
      },
    });
    nextId.current = nextId.current + 1;
    setValue("");
    setOpen(false);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="할일 입력후 확인 또는 Enter를 누르세요"
              autoFocus
              onChange={onChange}
              value={value}
            />
            <SubmitButton onSubmit={onSubmit}>확인</SubmitButton>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <AddButton onClick={onToggle} open={open}>
        <MdAdd />
      </AddButton>
    </>
  );
}

export default Create;
