import { Tab } from "@headlessui/react";
import ProductsTab from "../ProductsTab/ProductsTab";
import classNames from "classnames";
import { useGetProductsQuery } from "../../../../redux/Store/Features/products/productsApi";

const Products = () => {

  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  // category apis
  const mouse = products?.filter((item) => item.category === "Mouse");
  const keyboard = products?.filter((item) => item.category === "Keyboard");
  const chair = products?.filter((item) => item.category === "Chair");
  const combo = products?.filter((item) => item.category === "Combo");
  const headphone = products?.filter((item) => item.category === "Headphones");
  const joystick = products?.filter((item) => item.category === "Joystick");
  const games = products?.filter((item) => item.category === "Games");
  const accessories = products?.filter(
    (item) => item.category === "Accessories"
  );
  const monitor = products?.filter((item) => item.category === "Monitor");

  return (
    <div className="mt-5">
      <div className="block md:hidden">
        <Tab.Group vertical>
          <Tab.List className="flex flex-col rounded-xl bg-[#dfdfdfc5] p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Mouse
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Keyboard
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Joystick
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Monitor
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Chair
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Headphones
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Games
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Accessories
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Combo
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={mouse}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={keyboard}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={joystick}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={monitor}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={chair}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={headphone}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={games}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={accessories}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={combo}
              ></ProductsTab>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* tab for desktop */}
      <div className="hidden md:block">
        <Tab.Group>
          <Tab.List className="flex rounded-xl bg-[#dfdfdfc5] p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Mouse
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Keyboard
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Joystick
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Monitor
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Chair
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Headphones
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Games
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Accessories
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-1 text-sm font-medium text-black",
                  "ring-[#e6005c] ring-opacity-60 ring-offset-2 ring-offset-[#e6005c] focus:outline-none focus:ring-1",
                  selected ? "bg-[#e6005c] text-white shadow" : "text-black"
                )
              }
            >
              Combo
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={mouse}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={keyboard}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={joystick}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={monitor}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={chair}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={headphone}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={games}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={accessories}
              ></ProductsTab>
            </Tab.Panel>
            <Tab.Panel>
              <ProductsTab
                isLoading={isLoading}
                isError={isError}
                items={combo}
              ></ProductsTab>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Products;
