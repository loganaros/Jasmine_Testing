describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update server information on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let serverList = document.querySelectorAll('#serverTable tbody tr td');

    expect(serverList.length).toEqual(3);
    expect(serverList[0].innerText).toEqual('Alice');
    expect(serverList[1].innerText).toEqual('$0.00');
    expect(serverList[2].innerText).toEqual('X');
  })

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
