import React, { useState } from "react";
import { connect } from "redux-bundler-react";

const planetItemTypes = {
  PSScene3Band: [
    "analytic",
    "analytic_dn",
    "analytic_dn_xml",
    "analytic_xml",
    "basic_analytic",
    "basic_analytic_dn",
    "basic_analytic_dn_rpc",
    "basic_analytic_dn_xml",
    "basic_analytic_rpc",
    "basic_analytic_xml",
    "basic_udm",
    "basic_udm2",
    "udm",
    "udm2",
    "visual",
    "visual_xml",
  ],
  PSScene4Band: [
    "analytic",
    "analytic_dn",
    "analytic_dn_xml",
    "analytic_sr",
    "analytic_xml",
    "basic_analytic",
    "basic_analytic_dn",
    "basic_analytic_dn_nitf",
    "basic_analytic_dn_rpc",
    "basic_analytic_dn_rpc_nitf",
    "basic_analytic_dn_xml",
    "basic_analytic_dn_xml_nitf",
    "basic_analytic_nitf",
    "basic_analytic_rpc",
    "basic_analytic_rpc_nitf",
    "basic_analytic_xml",
    "basic_analytic_xml_nitf",
    "basic_udm",
    "basic_udm2",
    "udm",
    "udm2",
  ],
  PSOrthoTile: [
    "analytic",
    "analytic_5b",
    "analytic_5b_xml",
    "analytic_dn",
    "analytic_dn_xml",
    "analytic_sr",
    "analytic_xml",
    "visual",
    "visual_xml",
    "udm",
    "udm2",
  ],
  REOrthoTile: [
    "analytic",
    "analytic_sr",
    "analytic_xml",
    "udm",
    "visual",
    "visual_xml",
  ],
  REScene: [
    "basic_analytic_b1",
    "basic_analytic_b1_nitf",
    "basic_analytic_b2",
    "basic_analytic_b2_nitf",
    "basic_analytic_b3",
    "basic_analytic_b3_nitf",
    "basic_analytic_b4",
    "basic_analytic_b4_nitf",
    "basic_analytic_b5",
    "basic_analytic_b5_nitf",
    "basic_analytic_xml",
    "basic_analytic_xml_nitf",
    "basic_analytic_sci",
    "basic_analytic_rpc",
    "basic_udm",
    "browse",
  ],
  SkySatScene: [
    "basic_analytic",
    "basic_analytic_dn",
    "basic_analytic_dn_rpc",
    "basic_analytic_rpc",
    "basic_analytic_udm",
    "basic_analytic_udm2",
    "basic_l1a_panchromatic_dn",
    "basic_l1a_panchromatic_dn_rpc",
    "basic_panchromatic",
    "basic_panchromatic_dn",
    "basic_panchromatic_dn_rpc",
    "basic_panchromatic_rpc",
    "basic_panchromatic_udm2",
    "ortho_analytic",
    "ortho_analytic_dn",
    "ortho_analytic_udm",
    "ortho_analytic_udm2",
    "ortho_panchromatic",
    "ortho_panchromatic_dn",
    "ortho_panchromatic_udm",
    "ortho_panchromatic_udm2",
    "ortho_pansharpened",
    "ortho_pansharpened_udm",
    "ortho_pansharpened_udm2",
    "ortho_visual",
  ],
  SkySatCollect: [
    "ortho_analytic",
    "ortho_analytic_dn",
    "ortho_analytic_udm",
    "ortho_analytic_udm2",
    "ortho_panchromatic",
    "ortho_panchromatic_dn",
    "ortho_panchromatic_udm",
    "ortho_panchromatic_udm2",
    "ortho_pansharpened",
    "ortho_pansharpened_udm",
    "ortho_pansharpened_udm2",
    "ortho_visual",
  ],
  SkySatVideo: ["video_file", "video_frames", "video_metadata"],
  Landsat8L1G: [
    "analytic_b1",
    "analytic_b2",
    "analytic_b3",
    "analytic_b4",
    "analytic_b5",
    "analytic_b6",
    "analytic_b7",
    "analytic_b8",
    "analytic_b9",
    "analytic_b10",
    "analytic_b11",
    "analytic_bqa",
    "metadata_txt",
    "visual",
  ],
  Sentinel2L1C: [
    "analytic_b1",
    "analytic_b2",
    "analytic_b3",
    "analytic_b4",
    "analytic_b5",
    "analytic_b6",
    "analytic_b7",
    "analytic_b8",
    "analytic_b8a",
    "analytic_b9",
    "analytic_b10",
    "analytic_b11",
    "analytic_b12",
    "metadata_aux",
    "visual",
  ],
};

const NewOrder = connect(
  "doModalClose",
  "doOrderSubmit",
  ({ doModalClose, doOrderSubmit }) => {
    const [name, setName] = useState("");
    const [workspace, setWorkspace] = useState("");
    const [collection, setCollection] = useState("");
    const [itemType, setItemType] = useState("");
    const [bundles, setBundles] = useState([]);
    const [productIds, setProductIds] = useState("");

    const save = () => {
      const item_ids = productIds.replace(" ", "").split(",");
      const order = {
        name: name,
        products: bundles.map((productBundle) => {
          return {
            item_ids: item_ids,
            item_type: itemType,
            product_bundle: productBundle,
          };
        }),
        delivery: {
          google_earth_engine: {
            project: workspace,
            collection: collection,
          },
        },
      };
      console.log("saving", order);
      doOrderSubmit(order);
    };

    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">New Order</h4>
          <button
            onClick={doModalClose}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Order Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
            <small className="form-text text-muted">
              Name the order so you can keep track of it
            </small>
          </div>

          <div className="form-group">
            <label>Google Earth Engine Project</label>
            <input
              className="form-control"
              type="text"
              value={workspace}
              onChange={(e) => {
                setWorkspace(e.target.value);
              }}
              placeholder="Enter GEE project name"
            ></input>
          </div>

          <div className="form-group">
            <label>Google Earth Engine Image Collection</label>
            <input
              className="form-control"
              type="text"
              value={collection}
              onChange={(e) => {
                setCollection(e.target.value);
              }}
              placeholder="Enter GEE image collection"
            ></input>
            <small className="form-text text-muted">
              The Image Collection must already exist in Earth Engine
            </small>
          </div>

          <div className="form-group">
            <span className="float-right">
              <a
                href="https://developers.planet.com/docs/data/items-assets/"
                rel="noreferrer"
                target="_blank"
              >
                See Details
              </a>
            </span>
            <label>Planet Item Type </label>
            <select
              className="form-control"
              value={itemType}
              onChange={(e) => {
                setItemType(e.target.value);
                setBundles([]);
              }}
            >
              <option value="">Select an item type...</option>
              {Object.keys(planetItemTypes).map((key) => {
                return (
                  <option key={key} value={key}>
                    {key}
                  </option>
                );
              })}
            </select>
            <small className="form-text text-muted">
              ** All item types are shown here, but you might not have access to
              all through your API key
            </small>
          </div>

          <div className="form-group">
            <label>Planet Product Bundle</label>
            <select
              multiple={true}
              className="form-control"
              value={bundles}
              onChange={(e) => {
                const options = e.target.options;
                const selectedOptions = [];
                for (var i = 0, l = options.length; i < l; i++) {
                  if (options[i].selected) {
                    selectedOptions.push(options[i].value);
                  }
                }
                setBundles(selectedOptions);
              }}
            >
              {!itemType ? (
                <option value="">
                  Select an Item Type to see bundle options
                </option>
              ) : (
                planetItemTypes[itemType].map((bundleName) => {
                  return (
                    <option key={bundleName} value={bundleName}>
                      {bundleName}
                    </option>
                  );
                })
              )}
            </select>
            <small className="form-text text-muted">
              You may select more than one bundle
            </small>
          </div>

          <div className="form-group">
            <label>Product IDs</label>
            <textarea
              className="form-control"
              rows="5"
              value={productIds}
              onChange={(e) => {
                setProductIds(e.target.value);
              }}
            ></textarea>
            <small className="form-text text-muted">
              Product IDs should be comma delimited
            </small>
          </div>
        </div>
        <div className="modal-footer">
          <button
            onClick={doModalClose}
            className="btn btn-sm btn-outline-primary"
          >
            Cancel
          </button>
          <button onClick={save} className="btn btn-sm btn-primary">
            Submit
          </button>
        </div>
      </div>
    );
  }
);

export default NewOrder;
