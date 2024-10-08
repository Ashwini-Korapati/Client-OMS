

  import React, { useEffect, useState } from 'react';
  import { FaSearch, FaTimes } from 'react-icons/fa';
  import { Layout, Input, Button, Card, Row, Col, Typography, Space, Collapse, Dropdown, Menu, Modal } from 'antd';
  import { DownOutlined } from '@ant-design/icons';
  import { useNavigate } from 'react-router-dom';
  import { useSelector, useDispatch } from 'react-redux';
  import './Salary.css';
  import { fetchEmployees1, getSalary } from '../../../../../Redux/Slices/SalarySlice';
  import Payslip from '../Salary/Payslip/Payslip';
  import components from '../Salary/componentsData'

  const { Header, Content } = Layout;
  const { Text } = Typography;
  const { Panel } = Collapse;

  const Salary = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State mappings
    const employees = useSelector((state) => state.employees.employees.employees) || [];
    const employeesStatus = useSelector((state) => state.employees.employees.status);
    const salary = useSelector((state) => state.salary.salaryDetails);

    // Local state
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [salaryData, setSalaryData] = useState(null);
    const [addSalaryDisabled, setAddSalaryDisabled] = useState(true);
    const [updateSalaryDisabled, setUpdateSalaryDisabled] = useState(true);
    const [isPayslipModalVisible, setIsPayslipModalVisible] = useState(false);

    // Fetch employees on initial load
    useEffect(() => {
      if (employeesStatus === 'idle') {
        dispatch(fetchEmployees1());
      }
    }, [employeesStatus, dispatch]);

    const mapSalaryToComponents = (salary) => {
      const updatedComponents = JSON.parse(JSON.stringify(components));

      const updateComponentAmount = (name, amount) => {
        for (const component of updatedComponents) {
          for (const child of component.children) {
            const target = child.children?.find((subchild) => subchild.name.toUpperCase() === name.toUpperCase());
            if (target) {
              target.amount = amount;
              break;
            }
          }
        }
      };

      updateComponentAmount('BASIC', salary.revised_full_basic || '0.00');
      updateComponentAmount('HRA', salary.revised_full_hra || '0.00');
      updateComponentAmount('SPECIAL ALLOWANCE', salary.revised_full_special_allowance || '0.00');
      updateComponentAmount('OTHER ALLOWANCE', salary.revised_full_other_allowance || '0.00');
      updateComponentAmount('PF', salary.revised_full_employer_pf || '0.00');
      updateComponentAmount('TRAVELLING ALLOWANCE', salary.revised_full_travel_allowance || '0.00');

      return updatedComponents;
    };


    const filterComponents = (components) => {
      return components.reduce((acc, component) => {
        const children = component.children ? filterComponents(component.children) : [];
        const isMatch = component.name.toLowerCase().includes(searchTerm.toLowerCase());

        if (isMatch || children.length > 0) {
          acc.push({
            ...component,
            children,
          });
        }

        return acc;
      }, []);
    };

    const filteredComponents = filterComponents(salaryData || components);
    console.log(filteredComponents)


    const handleEmployeeSelect = async (employee) => {
      setSelectedEmployee(employee);

      if (employee) {
        try {
          await dispatch(getSalary(employee.emp_id));
        } catch (error) {
          console.error('Failed to fetch salary:', error);
        }
      }
    };

    useEffect(() => {
      if (salary && salary.length > 0) {
        const salaryData = salary[0];
        const totalSalaryAmount = parseFloat(salaryData.total_amt) || 0;
    
        setSalaryData(mapSalaryToComponents(salaryData));
        setAddSalaryDisabled(totalSalaryAmount > 0); 
        setUpdateSalaryDisabled(totalSalaryAmount <= 0); 
      } else if (salary && salary.length === 0) {
        setAddSalaryDisabled(false);
        setUpdateSalaryDisabled(true);
      }
    }, [salary]);

    const handleAddSalary = () => {
      if (selectedEmployee) {
        navigate('/hr-dashboard/updatesalary', { state: { emp_id: selectedEmployee.emp_id } });
      }
    };

    const handleUpdateSalary = () => {
      if (selectedEmployee) {
        navigate('/hr-dashboard/updatesalary', { state: { emp_id: selectedEmployee.emp_id } });
      }
    };

    const handleDeselectEmployee = (e) => {
      e.stopPropagation();
      setSelectedEmployee(null);
    };

    const employeeMenuItems = employees.map((emp) => ({
      key: emp.emp_id,
      label: `${emp.firstName} ${emp.lastName} - EMP_ID(${emp.emp_id})`,
      onClick: () => handleEmployeeSelect(emp)
    }));

    const showPayslipModal = () => {
      if (selectedEmployee) {
        setSelectedEmployeeId(selectedEmployee.emp_id);
        setIsPayslipModalVisible(true);
      } else {
        console.log('No employee selected');
      }
    };
    
    const handleCancel = () => {
      setIsPayslipModalVisible(false);
    };

    return (
      <Layout className='salary-dashboard'>
        <Header className="salary-header">
          <Space align="center">
            <Dropdown
              menu={{ items: employeeMenuItems }}
              trigger={['click']}
              className='employee-workdays-container'
            >
              <Button onClick={(e) => e.preventDefault()}>
                {selectedEmployee ? (
                  <>
                    {selectedEmployee.firstName} {selectedEmployee.lastName} - {selectedEmployee.emp_id}
                    <FaTimes className='deselect-icon' onClick={handleDeselectEmployee} />
                  </>
                ) : (
                  <>
                    Select Employee <DownOutlined />
                  </>
                )}
              </Button>
            </Dropdown>
          </Space>
        </Header>

        <Content style={{ padding: '20px' }}>
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={12} className='button-row'>
                <Button
                  type="primary"
                  className='primary-button'
                  onClick={handleAddSalary}
                  disabled={addSalaryDisabled}
                >
                  Add Salary
                </Button>
                <Button
                  type="primary"
                  className='primary-button'
                  onClick={handleUpdateSalary}
                  disabled={updateSalaryDisabled}
                >
                  Update Salary
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  onClick={showPayslipModal}
                  className='primary-button'
                  type="primary"
                >
                  Preview Payslip
                </Button>
              </Col>
              <Input
                className='searchbar'
                prefix={<FaSearch />}
                placeholder="Search components"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Col span={24}>
                <Collapse
                  accordion
                  activeKey={expandedKeys}
                  onChange={(keys) => setExpandedKeys(keys)}
                >
                  {filteredComponents.map((component, index) => (
                    <Panel header={component.name} key={index}>
                      {component.children.map((child, idx) => (
                        <Collapse key={idx}>
                          <Panel header={child.name} key={`${index}-${idx}`}>
                            {child.children.map((subchild, subIdx) => (
                              <Row key={subIdx}>
                                <Col span={18}>
                                  <Text>{subchild.name}</Text>
                                </Col>
                                <Col span={6}>
                                  <Text>{subchild.amount}</Text>
                                </Col>
                              </Row>
                            ))}
                          </Panel>
                        </Collapse>
                      ))}
                    </Panel>
                  ))}
                </Collapse>
              </Col>
            </Row>
          </Card>
        </Content>

        <Modal
          title="Payslip"
          visible={isPayslipModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Payslip employeeId={selectedEmployeeId} onClose={handleCancel} />
        </Modal>
      </Layout>
    );
  };

  export default Salary;


