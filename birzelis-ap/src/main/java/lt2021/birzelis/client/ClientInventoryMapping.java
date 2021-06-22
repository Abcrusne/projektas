package lt2021.birzelis.client;

import org.springframework.stereotype.Component;

import lt2021.birzelis.clientInventory.ClientInventory;
import lt2021.birzelis.inventory.Inventory;

@Component
public class ClientInventoryMapping {

	private DBClientDao dao;

	public ClientInventory mapInventorywithClient(CreateClientInventoryCommand cmd) {

		Client client = dao.findById(cmd.getClientId()).orElse(null);
		Inventory inventory = new Inventory();
		inventory.setTitle(cmd.getName());
		inventory.setWeight(cmd.getWeight());
		inventory.setSector(cmd.getSector());
		inventory.setDate(cmd.getDate());
		return null;
	}
}
