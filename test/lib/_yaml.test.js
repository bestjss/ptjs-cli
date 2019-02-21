const _file = require('../../lib/_file');
const _yaml = require('../../lib/_yaml');
const expect = require('chai').expect;

describe('_yaml', () => {
  const yaml_info = {
    random: '09d9720cfc7fd6f5',
    label: 'test',
    'source-type': 'python',
    'package-type': 'pip',
    'remote-type': 'github',
    remote: 'https://github.com/jsDuan/ptjs-template.git',
    branch: 'master'
  };

  it('create a yaml config', async () => {
    // Delete Test Template
    before(() => {
      if (_file.checkLabel(yaml_info.label)) {
        _yaml.removeYaml(yaml_info.label);
      }
    });
    await _yaml.writYaml(yaml_info);
    const res = _file.checkLabel(yaml_info.label);
    expect(!res).to.not.be.ok;
  });

  it('read a yaml config', async () => {
    const result = await _yaml.readYaml(yaml_info.label);
    expect(result).to.be.deep.equal(yaml_info);
  });

  it('delete a yaml config', () => {
    _yaml.removeYaml(yaml_info.label);
    const res = _file.checkLabel(yaml_info.label);
    expect(res).to.not.be.ok;
  });
});
