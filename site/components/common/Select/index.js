import PropTypes from 'prop-types';
import { Listbox, Transition } from '@headlessui/react';

const Select = ({ regionData, value, onChange }) => (
  <Listbox as="div" className="space-y-1" value={value} onChange={onChange}>
    {({ open }) => (
      <>
        <div className="relative">
          <span className="listbox">
            <Listbox.Button className="listbox__inner focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
              <span className="block truncate text-sm">{value}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Listbox.Button>
          </span>
          <Transition
            show={open}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="z-10 absolute mt-1 w-full rounded-md shadow-lg"
          >
            <Listbox.Options static className="listbox-option shadow-xs">
              {regionData.map((item) => (
                <Listbox.Option key={item} value={item}>
                  {({ selected, active }) => (
                    <div
                      className={`${
                        active
                          ? 'text-white bg-blue-600 dark:bg-blue-500'
                          : 'text-gray-900 dark:text-white'
                      } cursor-pointer select-none relative py-2 pl-8 pr-4`}
                    >
                      <span
                        className={`${
                          selected ? 'font-semibold' : 'font-normal'
                        } block truncate`}
                      >
                        {item}
                      </span>
                      {selected && (
                        <span
                          className={`${
                            active ? 'text-white' : 'text-blue-600'
                          } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                        >
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </>
    )}
  </Listbox>
);

Select.propTypes = {
  regionData: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Select;
