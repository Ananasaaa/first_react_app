import React, { useCallback } from 'react';

export const ImageListWithCounter = React.memo(function ImageListWithCounter({ id, setCountObj, countObj }) {
    const handleClick = useCallback(() => {
      setCountObj((prevCountObj) =>
        prevCountObj.map((user) => 
          user.id === id ? { ...user, count: user.count + 1 } : user
        )
      );
    }, [id, setCountObj]);

    const user = countObj.find((user) => user.id === id);

    return (
      <div className="col-3 text-center">
        <h1>{id}</h1>
        <h1>{user?.count || 0}</h1> 
        <button className="btn btn-primary" onClick={handleClick}>Click</button>
      </div>
    );
});

  