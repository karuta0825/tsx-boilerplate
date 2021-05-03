/* eslint-disable */
import * as React from "react";

interface PropsType {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (rows: number) => void;
}

const range = (max: number): number[] => {
  if (max === 0 || max === 1) {
    return [1];
  }
  return [...Array(max).keys()].map((i) => i + 1);
};

const getPageList = (i: number, max: number) => {
  if (max <= 7) {
    return range(max);
  }

  // 次のページを読み込む必要がない
  if (i <= 4) {
    return [1, 2, 3, 4, 5, "", max];
  }

  // 次ページが存在しない時
  if (i >= max - 2) {
    return [1, "", max - 4, max - 3, max - 2, max - 1, max];
  }

  return [1, "", i - 1, i, i + 1, "", max];
};

const PageNumber = ({
  num,
  i,
  onClick,
}: {
  num: string | number;
  i: number;
  onClick: (i: number) => void;
}) => {
  const value = num === "" ? "..." : num;
  const movePage = () => {
    if (num !== "") {
      onClick(num as number);
    }
  };

  const mystyle = { color: "red" };

  return (
    <li role="button" onClick={movePage} style={(i === num && mystyle) || {}}>
      {value}
    </li>
  );
};

const PrevButton = ({
  i,
  minPage,
  onClick,
}: {
  i: number;
  minPage: number;
  onClick: (i: number) => void;
}) => {
  const movePage = () => {
    onClick(i - 1);
  };

  if (i > minPage) {
    return (
      <button data-testid="prev-btn" onClick={movePage}>
        前へ
      </button>
    );
  }

  return <button disabled>前へ</button>;
};

const NextButton = ({
  i,
  maxPage,
  onClick,
}: {
  i: number;
  maxPage: number;
  onClick: (i: number) => void;
}) => {
  const movePage = () => {
    onClick(i + 1);
  };

  if (i + 1 <= maxPage) {
    return (
      <button data-testid="next-btn" onClick={movePage}>
        次へ
      </button>
    );
  }

  return <button disabled>次へ</button>;
};

export const Pagination = ({
  count,
  page,
  rowsPerPage,
  onChangePage,
  onChangeRowsPerPage,
}: PropsType) => {
  const pages = Math.ceil(count / rowsPerPage);
  const pageList = getPageList(page, pages);

  return (
    <div>
      <div>
        {[10, 15, 50].map((v) => {
          return (
            <button
              key={v}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                onChangePage(1);
                onChangeRowsPerPage(v);
              }}
            >
              {v}
            </button>
          );
        })}
      </div>
      <div data-testid="pagelist">
        <PrevButton i={page} minPage={1} onClick={onChangePage} />
        <ul data-testid="pageNumber">
          {pageList.map((n, i) => {
            return (
              <PageNumber
                key={`page_${i}`}
                num={n}
                i={page}
                onClick={onChangePage}
              />
            );
          })}
        </ul>
        <NextButton i={page} maxPage={pages} onClick={onChangePage} />
      </div>
    </div>
  );
};
