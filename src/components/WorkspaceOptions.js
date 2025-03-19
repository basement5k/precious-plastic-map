import React from 'react';

const WorkspaceOptions = () => {
  const options = [
    {
      id: 'workspace',
      label: 'Workspace',
      color: '#a8d1ff',
      icon: '🏢'
    },
    {
      id: 'machine-builder',
      label: 'Machine Builder',
      color: '#ffaab8',
      icon: '⚙️'
    },
    {
      id: 'community-point',
      label: 'Community Point',
      color: '#b8e0c4',
      icon: '👥'
    },
    {
      id: 'collection-point',
      label: 'Collection Point',
      color: '#d4c4f9',
      icon: '♻️'
    },
    {
      id: 'get-started',
      label: 'Want to get started',
      color: '#ffcdc0',
      icon: '🚀'
    }
  ];

  return (
    <div className="workspace-options">
      {options.map(option => (
        <div key={option.id} className="workspace-option">
          <div 
            className="workspace-icon" 
            style={{ backgroundColor: option.color }}
          >
            {option.icon}
          </div>
          <div className="workspace-text">{option.label}</div>
        </div>
      ))}
    </div>
  );
};

export default WorkspaceOptions;