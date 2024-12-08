import { Dispatch, SetStateAction, useState, useEffect } from "react";
import "../CSS/LegendStore.css";
import StarRankDropdown from "./StarRankDropdown"; // Import the new Star Rank component

const LegendStoreFilters: React.FC<{
  onFiltersChange: Dispatch<
    SetStateAction<{
      selectedClass: string;
      selectedCarRarity: string | null;
      searchTerm: string;
      selectedCumulativeLevel: number | null;
      selectedIndividualLevel: number | null;
      selectedStarRank: number | null;
    }>
  >;
}> = ({ onFiltersChange }) => {
  const [selectedClass, setSelectedClass] = useState(() =>
    localStorage.getItem("selectedClass") || "All Levels"
  );
  const [selectedCarRarity, setSelectedCarRarity] = useState<string | null>(() =>
    localStorage.getItem("selectedCarRarity") || null
  );
  const [searchTerm, setSearchTerm] = useState(() =>
    localStorage.getItem("searchTerm") || ""
  );
  const [selectedCumulativeLevel, setSelectedCumulativeLevel] = useState<number | null>(() =>
    localStorage.getItem("selectedCumulativeLevel") ? Number(localStorage.getItem("selectedCumulativeLevel")) : null
  );
  const [selectedIndividualLevel, setSelectedIndividualLevel] = useState<number | null>(() =>
    localStorage.getItem("selectedIndividualLevel") ? Number(localStorage.getItem("selectedIndividualLevel")) : null
  );
  const [selectedStarRank, setSelectedStarRank] = useState<number | null>(() =>
    localStorage.getItem("selectedStarRank") ? Number(localStorage.getItem("selectedStarRank")) : null
  );

  useEffect(() => {
    onFiltersChange({
      selectedClass,
      selectedCarRarity,
      searchTerm,
      selectedCumulativeLevel,
      selectedIndividualLevel,
      selectedStarRank,
    });
  }, [
    selectedClass,
    selectedCarRarity,
    searchTerm,
    selectedCumulativeLevel,
    selectedIndividualLevel,
    selectedStarRank,
    onFiltersChange,
  ]);

  return (
    <div className="controls">
      <h2 className="filterHeading">Car Search Filters</h2>

      <label className="DropdownLabel">
        Cumulative Garage Level:
        <select
          className="dropdownSelector"
          value={selectedCumulativeLevel !== null ? selectedCumulativeLevel : ""}
          onChange={(e) =>
            setSelectedCumulativeLevel(
              e.target.value ? parseInt(e.target.value, 10) : null
            )
          }
        >
          <option value="">All Levels</option>
          {Array.from({ length: 60 }, (_, i) => i + 1).map((level) => (
            <option key={level} value={level}>
              Level {level}
            </option>
          ))}
        </select>
      </label>

      <label className="DropdownLabel">
        Individual Garage Level:
        <select
          className="dropdownSelector"
          value={selectedIndividualLevel !== null ? selectedIndividualLevel : ""}
          onChange={(e) =>
            setSelectedIndividualLevel(
              e.target.value ? parseInt(e.target.value, 10) : null
            )
          }
        >
          <option value="">All Levels</option>
          {Array.from({ length: 60 }, (_, i) => i + 1).map((level) => (
            <option key={level} value={level}>
              Level {level}
            </option>
          ))}
        </select>
      </label>

      <label className="DropdownLabel">
        Star Rank:
        <StarRankDropdown
          selectedStarRank={selectedStarRank}
          onChange={(rank) => setSelectedStarRank(rank)}
        />
      </label>

      <label className="DropdownLabel">
        Rarity:
        <select
          className="dropdownSelector"
          value={selectedCarRarity !== null ? selectedCarRarity : ""}
          onChange={(e) => setSelectedCarRarity(e.target.value || null)}
        >
          <option value="">All Rarities</option>
          <option value="Rare" className="optionRare">Rare</option>
          <option value="Epic" className="optionEpic">Epic</option>
          <option value="Legendary" className="optionLegendary">Legendary</option>
        </select>
      </label>

      <label className="DropdownLabel" id="classSelector">
        Class:
        <select
          className="dropdownSelector"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="All Levels">All Levels</option>
          <option value="D">Class D</option>
          <option value="C">Class C</option>
          <option value="B">Class B</option>
          <option value="A">Class A</option>
          <option value="S">Class S</option>
        </select>
      </label>

      <label className="DropdownLabel">
        Search:
        <input
          id="searchInput"
          type="text"
          placeholder="Search by brand or model"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      <button
        className="resetButton"
        onClick={() => {
          localStorage.clear();
          setSelectedClass("All Levels");
          setSelectedCarRarity(null);
          setSearchTerm("");
          setSelectedCumulativeLevel(null);
          setSelectedIndividualLevel(null);
          setSelectedStarRank(null);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default LegendStoreFilters;
