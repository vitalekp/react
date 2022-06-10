import React from 'react';
import Pagination from './Pagination';
import User from './User';

// state
// curPage

class UsersList extends React.Component {
  state = {
    curPage: 1,
  };

  itemsPerPage = 3;

  prevBtnHandler = () => {
    this.setState({
      curPage: this.state.curPage - 1,
    });
  };
  nextBtnHandler = () => {
    this.setState({
      curPage: this.state.curPage + 1,
    });
  };

  render() {
    const users = this.props.users;

    const { currentPage } = this.state;
    const { itemsPerPage } = this;
    const { prevBtnHandler } = this;
    const { nextBtnHandler } = this;

    const startIndex = (curPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const usersToRender = users.slice(startIndex, endIndex);
    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goPrev={prevBtnHandler}
          goNext={nextBtnHandler}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />

        <ul className="users">
          {usersToRender.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
