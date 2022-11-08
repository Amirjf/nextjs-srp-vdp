import CarYearFilter from '../../car-year-filter/content/CarYearFilter';
import CarMakeFilter from '../../car-make-filter/CarMakeFilter';
import CarBodyFilter from '../../car-body-filter/CarBodyFilter';
import CarTrimFilter from '../../car-trim-filter/CarTrimFilter';
import CarColorFilter from '../../car-color-filter/CarColorFilter';
import CarEngineFilter from '../../car-engine-filter/CarEngineFilter';
import CarFuelFilter from '../../car-fuel-filter/CarFuelFilter';
import CarModelFilter from '../../car-model-filter/CarModelFilter';
import CarDriveTrainFilter from '../../car-drive-train-filter/CarDriveTrainFilter';
import CarTransmissionFilter from '../../car-transmission-filter/CarTransmissionFilter';
import CarDoorsFilter from '../../car-doors-filter/CarDoorsFilter';
import CarKeyFeaturesFilter from '../../car-keyFeature-filter/content/CarKeyFeaturesFilter';
import CarInteriorColorFilter from '../../car-int-color-filter/content/CarInteriorColorFilter';
import CarDealerFilter from '../../car-dealer-filter/CarDealerFilter';

type FilterItemTitleType = {
  make: string;
  model: string;
  year: string;
  trim: string;
  body: string;
  key_features: string;
  ext_color: string;
  int_color: string;
  fuel_type: string;
  drive_train: string;
  transmission: string;
  engine: string;
  doors: string;
  [key: string]: any;
};

export const filterItemTitleTranslator: FilterItemTitleType = {
  make: 'Make',
  model: 'Model',
  year: 'Year',
  trim: 'Trim',
  body: 'Body',
  key_features: 'Key Features',
  ext_color: 'Color',
  int_color: 'Interior Color',
  fuel_type: 'Fuel',
  drive_train: 'Drive Train',
  transmission: 'Transmission',
  engine: 'Engine',
  doors: 'Doors',
  dealer: 'Locations',
};

export const FILTERS: any = {
  year: (filterValues: any) => <CarYearFilter items={filterValues} />,
  make: (filterValues: any) => <CarMakeFilter items={filterValues} />,
  model: (filterValues: any) => <CarModelFilter items={filterValues} />,
  key_features: (filterValues: any) => (
    <CarKeyFeaturesFilter items={filterValues} />
  ),
  trim: (filterValues: any) => <CarTrimFilter items={filterValues} />,
  body: (filterValues: any) => <CarBodyFilter items={filterValues} />,
  ext_color: (filterValues: any) => <CarColorFilter items={filterValues} />,
  int_color: (filterValues: any) => (
    <CarInteriorColorFilter items={filterValues} />
  ),
  fuel_type: (filterValues: any) => <CarFuelFilter items={filterValues} />,
  drive_train: (filterValues: any) => (
    <CarDriveTrainFilter items={filterValues} />
  ),
  transmission: (filterValues: any) => (
    <CarTransmissionFilter items={filterValues} />
  ),
  engine: (filterValues: any) => <CarEngineFilter items={filterValues} />,
  doors: (filterValues: any) => <CarDoorsFilter items={filterValues} />,
  dealer: (filterValues: any) => <CarDealerFilter items={filterValues} />,
};
