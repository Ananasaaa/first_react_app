import React, { useState, useMemo } from 'react';

export const ButtonResult = React.memo(function ButtonResult({ countObj }) {
    const [showResult, setShowResult] = useState(false);

    const mostClickedUser = useMemo(() => {
        return countObj.reduce((prev, current) => 
          (prev.count > current.count ? prev : current), 
          { id: null, count: 0 }
        );
    }, [countObj]);

    const handleClick = () => {
        setShowResult(true);
    };

    return (
        <div>
            <button className="btn btn-success btn-lg" onClick={handleClick}>Show result</button>
            {showResult && (
                <div>
                    <h2>Winner</h2>
                    {mostClickedUser && (
                        <div>
                            <h3>{mostClickedUser.id}</h3>
                            <h4>Clicks: {mostClickedUser.count}</h4>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
});
