import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Icon, InlineIcon } from "@iconify/react";
import pirateIcon from "@iconify-icons/mdi/pirate";

const Header = () => {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Icon icon={pirateIcon} height="1.5rem" width="1.5rem" />
          <h3 className="app-title">Translator for Pirates</h3>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
