import { range } from './utils';

const Grid = ({ numRows, numCols }) => {
  const rowIndex = range(numRows);
  const colindex = range(numCols);
  return (
    <div style={{}} className="grid">
      {rowIndex.map((row) => (
        <div
          className="row"
          key={row}
        >
          {colindex.map((col) => (
            <div className="col" key={col} 
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Grid;