import React, { useState } from 'react'
import '../Styles/PopUp.css'
import { useData } from "../context/dataContext";

export default function PopUp({ handleGroupByChange, handleOrerByChange }) {
    const { groupByKey, orderByKey, updateGroupBy, updateOrderBy } = useData();
    return (
        <div className="App">
          <div className="controls">
            <div className="control">
              <label>Grouping</label>
              <select
                value={groupByKey}
                onChange={(e) => updateGroupBy(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="control">
              <label>Ordering</label>
              <select
                value={orderByKey}
                onChange={(e) => updateOrderBy(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      );
    };
