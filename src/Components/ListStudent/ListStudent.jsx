import React, { Component } from "react";

export default class ListStudent extends Component {
  render() {
    const { listStudent, deleteStudent, editStudent } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      deleteStudent(student.id);
                    }}
                  >
                    Xoá
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => editStudent(student)}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
