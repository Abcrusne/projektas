package lt2021.birzelis.client;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service class
 * 
 * @author rpetrauskaite
 */
@Service
public class ServiceClient {

	@Autowired
	private DBClientDao dao;

	/**
	 * This method is for getting all clients from db
	 * 
	 * @return list of clients
	 */
	// list of clients
	@Transactional(readOnly = true)
	public Set<ClientFromService> getClients() {
		return dao
				.findAll().stream().map(client -> new ClientFromService(client.getId(), client.getName(),
						client.getLastname(), client.getBirthdate(), client.getPhoneNumber(), client.getType()))
				.collect(Collectors.toSet());
	}

	/**
	 * This method is for getting specified client from db
	 * 
	 * @return client
	 * @param client id
	 */
	// one client
	@Transactional(readOnly = true)
	public ClientFromService getClient(Long id) {
		var client = dao.findById(id).orElse(null);
		return new ClientFromService(client.getId(), client.getName(), client.getLastname(), client.getBirthdate(),
				client.getPhoneNumber(), client.getType());
	}

	// create new client
	@Transactional
	public void addClient(ClientFromService client) {
		dao.save(new Client(client.getName(), client.getLastname(), client.getBirthdate(), client.getPhoneNumber(),
				client.getType()));
	}

	// update existing client
	@Transactional
	public void updateClient(ClientFromService client) {
		var updatedClient = dao.findById(client.getId()).orElse(null);
		updatedClient.setName(client.getName());
		updatedClient.setLastname(client.getLastname());
		updatedClient.setBirthdate(client.getBirthdate());
		updatedClient.setPhoneNumber(client.getPhoneNumber());
		updatedClient.setType(client.getType());
		dao.save(updatedClient);
	}

	// delete client
	public void deleteClient(Long id) {
		dao.deleteById(id);
	}

	public DBClientDao getDao() {
		return dao;
	}

	public void setDao(DBClientDao dao) {
		this.dao = dao;
	}

}
