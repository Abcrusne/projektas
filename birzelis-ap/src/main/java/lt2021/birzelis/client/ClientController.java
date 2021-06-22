package lt2021.birzelis.client;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/clients")
public class ClientController {

	@Autowired
	private ServiceClient service;

	@RequestMapping(method = RequestMethod.GET)
	public Set<ClientFromService> getClients() {
		return service.getClients();
	}

	@RequestMapping(method = RequestMethod.POST)
	public Set<ClientFromService> addClient(@RequestBody final CreateClientCommand cmd) {

		service.addClient(new ClientFromService(cmd.getName(), cmd.getLastname(), cmd.getBirthdate(),
				cmd.getPhoneNumber(), cmd.getType()));
		return service.getClients();
	}

	@RequestMapping(path = "/{clientId}", method = RequestMethod.GET)
	public ClientFromService getSingleClient(@PathVariable final Long clientId) {
		return service.getClient(clientId);
	}

	@RequestMapping(path = "/{clientId}", method = RequestMethod.DELETE)
	public void deleteClient(@PathVariable final Long clientId) {
		service.deleteClient(clientId);
	}

	@RequestMapping(path = "/{clientId}", method = RequestMethod.PUT)
	public void updateClient(@PathVariable final Long clientId, @RequestBody final CreateClientCommand cmd) {
		service.updateClient(new ClientFromService(clientId, cmd.getName(), cmd.getLastname(), cmd.getBirthdate(),
				cmd.getPhoneNumber(), cmd.getType()));
	}
//	@RequestMapping(path = "/{clientId}/inventories", method = RequestMethod.GET)
//	public ClientFromService getSingleClientInventory(@PathVariable final Long clientId) {
//		return service.getClient(clientId);
//	}

}
