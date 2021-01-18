import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { StateTypes } from '../../types';
import { setPage } from '../../state/reducers/findUsersReducer';

type PaginationProps = {
    pages: number;
    getUser: (page: number) => void;
};

const Pagination: React.FunctionComponent<PaginationProps> = ({ pages = 10, getUser }) => {
    const totalPages = Math.ceil(pages);
    const dispatch = useDispatch();
    const page = useSelector((state: StateTypes) => state.findUsers.pageCounter);
    const [counter, setCounter] = useState(1);

    const onClick = (item: number) => {
        setCounter(item);
        dispatch(setPage(item));
    };

    useEffect(() => {
        dispatch(setPage(page));
        getUser(page);
    }, [counter]);

    const item = () => {
        if (counter === 1) {
            return (
                <>
                    <button
                        className="pagination__button"
                        onClick={() => {
                            onClick(page + 1);
                        }}
                    >
                        {page + 1}
                    </button>
                    <div className="pagination__button">...</div>
                </>
            );
        } else if (counter === 2) {
            return (
                <>
                    <button
                        className={classNames('pagination__button', { 'pagination__button--active': page === counter })}
                        onClick={() => {
                            onClick(page);
                        }}
                    >
                        {page}
                    </button>
                    <button
                        className="pagination__button"
                        onClick={() => {
                            onClick(page + 1);
                        }}
                    >
                        {page + 1}
                    </button>
                    <div className="pagination__button">...</div>
                </>
            );
        } else if (counter === 3 || page < totalPages) {
            return (
                <>
                    <div className="pagination__button">...</div>
                    <button
                        className="pagination__button"
                        onClick={() => {
                            onClick(page - 1);
                        }}
                    >
                        {page - 1}
                    </button>
                    <button
                        className={classNames('pagination__button', { 'pagination__button--active': page === counter })}
                        onClick={() => {
                            onClick(page);
                        }}
                    >
                        {page}
                    </button>
                    <button
                        className="pagination__button"
                        onClick={() => {
                            onClick(page + 1);
                        }}
                    >
                        {page + 1}
                    </button>
                    <div className="pagination__button">...</div>
                </>
            );
        } else if (counter === totalPages) {
            return (
                <>
                    <div className="pagination__button">...</div>
                    <button
                        className="pagination__button"
                        onClick={() => {
                            onClick(page - 1);
                        }}
                    >
                        {counter - 1}
                    </button>
                </>
            );
        }
        return (
            <button
                className={classNames('pagination__button', { 'pagination__button--active': page === counter })}
                onClick={() => {
                    onClick(page);
                }}
            >
                {page}
            </button>
        );
    };

    return (
        <div className="pagination">
            <button
                className="pagination__button"
                disabled={counter <= 1}
                onClick={() => {
                    onClick(page - 1);
                }}
            >
                prev
            </button>
            <button
                className={classNames('pagination__button', { 'pagination__button--active': page === 1 })}
                onClick={() => {
                    onClick(1);
                }}
            >
                1
            </button>
            {item()}
            <button
                className={classNames('pagination__button', { 'pagination__button--active': page === totalPages })}
                onClick={() => {
                    onClick(totalPages);
                }}
            >
                {totalPages}
            </button>
            <button
                className="pagination__button"
                disabled={counter === totalPages}
                onClick={() => {
                    onClick(page + 1);
                }}
            >
                next
            </button>
        </div>
    );
};

export default Pagination;
