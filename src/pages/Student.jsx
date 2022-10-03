import React, { Component } from "react";
import ListStudent from "../Components/ListStudent/ListStudent";

export default class Student extends Component {
  state = {
    values: {
      id: "",
      phone: "",
      name: "",
      email: "",
    },
    errors: {
      id: "",
      phone: "",
      name: "",
      email: "",
    },
    isSubmit: true,
    listStudent: [
      {
        id: "1",
        name: "Nguyen Van A",
        phone: "0965571525",
        email: "minhhieu@gmail.com",
      },
    ],
  };
  handleChangeInput = (e) => {
    let { id, value } = e.target;
    let newValues = { ...this.state.values };
    newValues[id] = value;
    let newErrors = { ...this.state.errors };
    let messageError = "";
    if (value.trim() === "") {
      messageError = id + " is not empty";
    } else {
      let dataType = e.target.getAttribute("data-type");
      if (dataType === "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messageError = id + " must be a number";
        }
      }
      if (dataType === "email") {
        let regexEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(value)) {
          messageError = id + "  invalid format";
        }
      }
      if (dataType === "phone") {
        let regexPhone =
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
        if (!regexPhone.test(value)) {
          messageError = id + " invalid format";
        }
      }
      if (dataType === "name") {
        let regexName = /^[a-zA-Z ]+$/;
        if (!regexName.test(value)) {
          messageError = id + " invalid format";
        }
      }
    }
    newErrors[id] = messageError;
    let submit = false;
    for (let key in newValues) {
      if (newValues[key].toString().trim() === "") {
        submit = true;
      }
    }
    this.setState(
      {
        errors: newErrors,
        values: newValues,
        isSubmit: submit,
      },

      () => console.log(this.state)
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let { errors } = this.state;
    for (let key in errors) {
      if (errors[key] !== "") {
        alert("Dữ liệu không hợp lệ");
        return;
      }
    }
    let newListStudent = { ...this.state.values };
    this.state.listStudent.push(newListStudent);
    this.setState({
      listStudent: this.state.listStudent,
    });
  };
  editStudent = (studentEdit) => {
    console.log(studentEdit);
    this.setState({ values: studentEdit });
  };
  deleteStudent = (idClick) => {
    console.log(idClick);
    this.state.listStudent = this.state.listStudent.filter(
      (student) => student.id !== idClick
    );
    this.setState({ listStudent: this.state.listStudent });
  };
  handleUpdate = () => {
    let studentUpdate = this.state.listStudent.find(
      (student) => student.id === this.state.values.id
    );
    for (let key in studentUpdate) {
      studentUpdate[key] = this.state.values[key];
    }
    this.setState({ listStudent: this.state.listStudent,});
  };
  render() {
    return (
      <div className="container">
        <form action="" onSubmit={this.handleSubmit}>
          <h3 className="text-center py-2">Student</h3>
          <div className="card">
            <div className="card-header bg-dark text-start py-3 text-white">
              <h3>Thông tin sinh viên</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Mã sinh viên</p>
                    <input
                      className="form-control mb-2"
                      type="text"
                      data-type="number"
                      id="id"
                      name="id"
                      onChange={this.handleChangeInput}
                      value={this.state.values.id}
                    />
                    <p className="text-danger">{this.state.errors.id}</p>
                  </div>
                  <div className="form-group">
                    <p>Số điện thoại </p>
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="phone"
                      data-type="phone"
                      name="phone"
                      onChange={this.handleChangeInput}
                      value={this.state.values.phone}
                    />
                    <p className="text-danger">{this.state.errors.phone}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Họ và tên </p>
                    <input
                      className="form-control mb-2"
                      type="text"
                      data-type="name"
                      id="name"
                      name="name"
                      onChange={this.handleChangeInput}
                      value={this.state.values.name}
                    />
                    <p className="text-danger">{this.state.errors.name}</p>
                  </div>
                  <div className="form-group">
                    <p>Email </p>
                    <input
                      className="form-control mb-2"
                      type="text"
                      data-type="email"
                      id="email"
                      name="email"
                      onChange={this.handleChangeInput}
                      value={this.state.values.email}
                    />
                    <p className="text-danger">{this.state.errors.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-success"
            type="submit"
            disabled={this.state.isSubmit}
          >
            Thêm sinh viên
          </button>
          <button
            className="btn btn-primary mx-2"
            type="button"
            disabled={this.state.isSubmit}
            onClick={() => {
              this.handleUpdate();
            }}
          >
            Cập nhật
          </button>
        </form>
        <ListStudent
          listStudent={this.state.listStudent}
          deleteStudent={this.deleteStudent}
          editStudent={this.editStudent}
        />
      </div>
    );
  }
}
