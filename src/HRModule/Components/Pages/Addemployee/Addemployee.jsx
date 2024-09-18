
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Select, DatePicker, Radio, Steps, Button, Modal,Checkbox } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CostCenterForm from '../Addemployee/CostCenter/CostCenterForm';
import LocationForm from '../Addemployee/Location/LocationForm';
import DepartmentForm from '../Addemployee/Department/DepartmentForm';
import CompanyForm from '../Addemployee/Company/CompanyForm';
 
import {
  setCurrentStep,
  setPaymentType,
  updateFormData,
  setCostCenters,
  setLocations,
  setDepartments,
  setCompanies,
  addEmployeeAsync,
} from '../../../Redux/Slices/NewAddemployee';
 
import '../Addemployee/Addemployee.css';
 
const { Option } = Select;
const { Step } = Steps;
 
const AddEmployee = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.addemployee.currentStep);
  const paymentType = useSelector((state) => state.addemployee.paymentType);
  const formData = useSelector((state) => state.addemployee.formData);
 
  const costCenters = useSelector((state) => state.addemployee.costCenters);
  const locations = useSelector((state) => state.addemployee.locations);
  const departments = useSelector((state) => state.addemployee.departments);
  const companies = useSelector((state) => state.addemployee.companies);
 
 
  const [form] = Form.useForm();
 
  // State variables for controlling the visibility of pop-up forms
  const [showCostCenterForm, setShowCostCenterForm] = useState(false);
  const [showLocationForm, setShowLocationForm] = useState(false);
  const [showDepartmentForm, setShowDepartmentForm] = useState(false);
  const [showCompanyForm, setShowCompanyForm] = useState(false);
 
  useEffect(() => {
    const storedCostCenters = JSON.parse(localStorage.getItem('costCenters')) || [];
    const storedLocations = JSON.parse(localStorage.getItem('locations')) || [];
    const storedDepartments = JSON.parse(localStorage.getItem('departments')) || [];
    const storedCompanies = JSON.parse(localStorage.getItem('companies')) || [];
    dispatch(setCostCenters(storedCostCenters));
    dispatch(setLocations(storedLocations));
    dispatch(setDepartments(storedDepartments));
    dispatch(setCompanies(storedCompanies));
  }, [dispatch]);
 
  const updateLocalStorage = () => {
    localStorage.setItem('costCenters', JSON.stringify(costCenters));
    localStorage.setItem('locations', JSON.stringify(locations));
    localStorage.setItem('departments', JSON.stringify(departments));
    localStorage.setItem('companies', JSON.stringify(companies));
  };
 
  const handleCostCenterFormFinish = (newCenters) => {
    dispatch(setCostCenters(newCenters));
    updateLocalStorage();
  };
 
  const handleLocationFormFinish = (newLocations) => {
    dispatch(setLocations(newLocations));
    updateLocalStorage();
  };
 
  const handleDepartmentFormFinish = (newDepartments) => {
    dispatch(setDepartments(newDepartments));
    updateLocalStorage();
  };
 
  const handleCompanyFormFinish = (newCompanies) => {
    dispatch(setCompanies(newCompanies));
    updateLocalStorage();
  };
 
  const handlePaymentTypeChange = (value) => {
    dispatch(setPaymentType(value));
  };
 
  const next = () => {
    dispatch(setCurrentStep(currentStep + 1));
  };
 
  const prev = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };
 
 
  const onFinish = async (values) => {
    try {
      const response = await dispatch(addEmployeeAsync(formData)).unwrap();
      
      console.log('API Response:', response); 
      form.resetFields();
      toast.success('Employee added successfully.');
    } catch (error) {
      console.error('Error adding employee:', error.message || error);
    }
  };
 
  
 
  return (
    <div className='main-addemployee'>
      <div className='add-emp-head'>
        <h3>ADD EMPLOYEE</h3>
      </div>
      <div>
        <Steps current={currentStep} className='main-dot-strength'>
          <Step title="Basic Information" />
          <Step title="Employee Position" />
          <Step title="Statutory Info" />
          <Step title="Payment Mode" />
        </Steps>
        <div className='main-add'>
          <Form
            layout="vertical"
            className="custom-form"
            onFinish={onFinish}
            form={form}
            initialValues={formData}
            onValuesChange={(changedValues, allValues) => {
              dispatch(updateFormData(allValues));
            }}
          >
            {currentStep === 0 && (
                <>
                <h3>Step: 1 Basic information</h3>
                             <div className="form-row">
               <Form.Item
                label="Employee Number Series"
                className="form-item"
                name="empNumberSeries"
                rules={[{ message: 'Please select employee number series' }]}
              >
                <Select placeholder="---Select---">
                  <Option value="series1">Series 1</Option>
                  <Option value="series2">Series 2</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Probation Period"
                className="form-item"
                name="probationPeriod"
                rules={[{ message: 'Please input probation period' }]}
              >
                <Input type="number" value='probationPeriod' addonAfter="Days" />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="Employee No"
                className="form-item"
                name="emp_id"
                rules={[{  message: 'Please input employee number' }]}
              >
                <Input />
              </Form.Item>
  
              <Form.Item
                label="Confirmation Date"
                className="form-item"
                name="confirmationDate"
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="Name"
                className="form-item"
                name="firstName"
                rules={[{ message: 'Please input name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                className="form-item"
                name="email"
                rules={[{ type: 'email', message: 'Please input a valid email' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="Date Of Birth"
                className="form-item"
                name="dob"
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Mobile Number"
                className="form-item"
                name="phoneNumber"
                rules={[{ message: 'Please input mobile number' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="Aadhaar Number"
                className="form-item"
                name="aadharNo"
                rules={[{ message: 'Please input Aadhaar number' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Emergency Contact Name"
                className="form-item"
                name="emergencyContactName"
                rules={[{ message: 'Please input emergency contact name' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="Gender"
                className="form-item"
                name="gender"
                rules={[{  message: 'Please select gender' }]}
              >
                <Radio.Group>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="other">Others</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Emergency Contact Number"
                className="form-item"
                name="emergencyContactNumber"
                rules={[{ message: 'Please input emergency contact number' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="Reporting Manager"
                className="form-item"
                name="reporting_to"
                rules={[{ message: 'Please select reporting manager' }]}
              >
                <Select>
                  <Option value="manager1">Manager 1</Option>
                  <Option value="manager2">Manager 2</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Father's Name"
                className="form-item"
                name="fathersName"
                rules={[{ message: 'Please input father\'s name' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="Status"
                className="form-item"
                name="status"
                rules={[{ message: 'Please select status' }]}
              >
                <Select placeholder="---Select---">
                  <Option value="active">Active</Option>
                  <Option value="inactive">Inactive</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Spouse Name"
                className="form-item"
                name="spouseName"
                rules={[{  message: 'Please input spouse name' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="Date Of Joining"
                className="form-item"
                name="dateOfJoining"
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Referred By"
                className="form-item"
                name="referredBy"
                rules={[{  message: 'Please select referrer' }]}
              >
                <Select>
                  <Option value="referrer1">Referrer 1</Option>
                  <Option value="referrer2">Referrer 2</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="form-row">
            <Form.Item
                label="Role"
                className="form-item"
                name="role"
                rules={[{  message: 'Please enter employee role' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Designation"
                className="form-item"
                name="designation"
                rules={[{  message: 'Please enter employee designation' }]}
              >
                <Input />
              </Form.Item>
              </div>
              </>
            )}
            {currentStep === 1 && (
              <>
                <h3>Step: 2 Employee Position</h3>
                <div className="form-row">
                  <Form.Item
                    label="Cost Center"
                    className="form-item"
                    name="costCenter"
                    rules={[{ message: 'Please select cost center' }]}
                  >
                    <Select
                      placeholder="---Select---"
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }}>
                            <Button type="link" onClick={() => setShowCostCenterForm(true)}>
                              <EditOutlined /> Edit
                            </Button>
                          </div>
                        </>
                      )}
                    >
                      {costCenters.map((center) => (
                        <Option key={center.id} value={center.name}>
                          {center.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Department"
                    className="form-item"
                    name="department"
                    rules={[{ message: 'Please select department' }]}
                  >
                    <Select
                      placeholder="---Select---"
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }}>
                            <Button type="link" onClick={() => setShowDepartmentForm(true)}>
                              <EditOutlined /> Edit
                            </Button>
                          </div>
                        </>
                      )}
                    >
                      {departments.map((department) => (
                        <Option key={department.id} value={department.name}>
                          {department.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <div className="form-row">
                  <Form.Item
                    label="Location"
                    className="form-item"
                    name="location"
                    rules={[{ message: 'Please select location' }]}
                  >
                    <Select
                      placeholder="---Select---"
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }}>
                            <Button type="link" onClick={() => setShowLocationForm(true)}>
                              <EditOutlined /> Edit
                            </Button>
                          </div>
                        </>
                      )}
                    >
                      {locations.map((location) => (
                        <Option key={location.id} value={location.name}>
                          {location.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Company"
                    className="form-item"
                    name="company"
                    rules={[{ message: 'Please select company' }]}
                  >
                    <Select
                      placeholder="---Select---"
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }}>
                            <Button type="link" onClick={() => setShowCompanyForm(true)}>
                              <EditOutlined /> Edit
                            </Button>
                          </div>
                        </>
                      )}
                    >
                      {companies.map((company) => (
                        <Option key={company.id} value={company.name}>
                          {company.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
              </>
            )}
            {currentStep === 2 && (
                          <>
                <h3>Step: 3 Statutory Info</h3>
                             <div className="form-row">
               <Form.Item
                label="PAN Number"
                className="form-item"
                name="panNumber"
                rules={[{message: 'Please input PAN number' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
            <div className="custom-checkbox-group">
 
              <Form.Item
                className="form-item-checkbox"
                name="includePF"
                valuePropName="checked"
              >
                <Checkbox value={0}>Include PF</Checkbox>
              </Form.Item>
              <Form.Item
                className="form-item-checkbox"
                name="includeESI"
                valuePropName="checked"
              >
                <Checkbox value={1}>Include ESI</Checkbox>
              </Form.Item>
              <Form.Item
                className="checbox1"
                name="includeLWF"
                valuePropName="checked"
              >
                <Checkbox value={2}>Include LWF</Checkbox>
              </Form.Item>
              </div>
            </div>
            <div className="form-row">
              <Form.Item
                label="PF Number"
                className="form-item"
                name="pfNumber"
                rules={[{ message: 'Please input PF number' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="UAN Number"
                className="form-item"
                name="uanNumber"
                rules={[{ message: 'Please input UAN number' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="ESI Number"
                className="form-item"
                name="esiNumber"
                rules={[{ message: 'Please input ESI number' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="PF Nominee Name"
                className="form-item"
                name="pfNomineeName"
                rules={[{  message: 'Please input PF nominee name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="PF Nominee Dob"
                className="form-item"
                name="pfNomineeDob"
                rules={[{ message: 'Please select PF nominee date of birth' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </div>
              </>
            )}
            {currentStep === 3 && (
                           <>
             <h3>Step: 4 Payment Mode</h3>
            <div className="form-row">
             <Form.Item
                label="Payment Type"
                className="form-item"
                name="paymentMode"
                rules={[{ message: 'Please select payment type' }]}
              >
                <Select onChange={handlePaymentTypeChange} placeholder="---Select Payment Type---">
                  <Option value="cash">Cash</Option>
                  <Option value="bankTransfer">Bank Transfer</Option>
                  <Option value="cheque">Cheque</Option>
                  <Option value="demandDraft">Demand Draft</Option>
                </Select>
              </Form.Item>
            </div>
            {paymentType === 'bankTransfer' && (
              <div className="form-row">
                <Form.Item
                  label="Bank Name"
                  className="form-item"
                  name="bankName"
                  rules={[{ message: 'Please select bank name' }]}
                >
                  <Select placeholder="---Select---">
                    <Option value="kotakbank">Kotak Mahindra</Option>
                    <Option value="icici">ICICI</Option>
                    <Option value="canara">Canara</Option>
                    <Option value="sbi">SBI</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Bank Branch"
                  className="form-item"
                  name="bankBranch"
                  rules={[{ message: 'Please select bank branch' }]}
                >
                  <Select placeholder="---Select---">
                    <Option value="banglore">Banglore</Option>
                    <Option value="chennai">Chennai</Option>
                    <Option value="hyd">Hyderbad</Option>
                    <Option value="jaynagar">Jayanagar</Option>
                  </Select>
                </Form.Item>
              </div>
            )}
            {paymentType === 'bankTransfer' && (
              <div className="form-row">
                <Form.Item
                  label="Bank Account Number"
                  className="form-item"
                  name="bankAccountNumber"
                  rules={[{ message: 'Please input bank account number' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Bank Account Type"
                  className="form-item"
                  name="bankAccountType"
                  rules={[{message: 'Please input bank account type' }]}
                >
                  <Input />
                </Form.Item>
              </div>
            )}
            {paymentType === 'cheque' && (
              <div className="form-row">
                <Form.Item
                  label="Cheque Number"
                  className="form-item"
                  name="chequeNumber"
                  rules={[{message: 'Please input cheque number' }]}
                >
                  <Input />
                </Form.Item>
              </div>
            )}
            {paymentType === 'demandDraft' && (
              <div className="form-row">
                <Form.Item
                  label="Bank Branch "
                  className="form-item"
                  name="bankbranch"
                  rules={[{ message: 'Please select bank branch' }]}
                >
                  <Select placeholder="---Select---">
                    <Option value="banglore">Banglore</Option>
                    <Option value="chennai">Chennai</Option>
                    <Option value="hyd">Hyderbad</Option>
                    <Option value="jaynagar">Jayanagar</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="DD Payable At"
                  className="form-item"
                  name="ddPayableAt"
                  rules={[{  message: 'Please input DD payable at' }]}
                >
                  <Input />
                </Form.Item>
              </div>
            )}
            {paymentType === 'demandDraft' && (
              <div className="form-row">
                <Form.Item
                  label="Demand Draft Date"
                  className="form-item"
                  name="ddDate"
                  rules={[{  message: 'Please select demand draft date' }]}
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </div>
             
                  )}
              </>
            )}
                <div className="steps-action">
               {currentStep > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={prev}>
                  Previous
                </Button>
              )}
              {currentStep < 3 && (
                <Button type="primary" onClick={next}>
                  Next
                </Button>
              )}
              {currentStep === 3 && (
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </div>
      </div>
      {/* Pop-up Forms */}
      <Modal
        title="Add Cost Center"
        visible={showCostCenterForm}
        footer={null}
        onCancel={() => setShowCostCenterForm(false)}
      >
        <CostCenterForm onFinish={handleCostCenterFormFinish} />
      </Modal>
      <Modal
        title="Add Location"
        visible={showLocationForm}
        footer={null}
        onCancel={() => setShowLocationForm(false)}
      >
        <LocationForm onFinish={handleLocationFormFinish} />
      </Modal>
      <Modal
        title="Add Department"
        visible={showDepartmentForm}
        footer={null}
        onCancel={() => setShowDepartmentForm(false)}
      >
        <DepartmentForm onFinish={handleDepartmentFormFinish} />
      </Modal>
      <Modal
        title="Add Company"
        visible={showCompanyForm}
        footer={null}
        onCancel={() => setShowCompanyForm(false)}
      >
        <CompanyForm onFinish={handleCompanyFormFinish} />
      </Modal>
      <ToastContainer/>
    </div>
  );
};
 
export default AddEmployee;