package com.capacitortoastwithduration;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ToastWithDuration")
public class ToastWithDurationPlugin extends Plugin {

    private ToastWithDuration implementation = new ToastWithDuration();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

      @PluginMethod
    public void show(PluginCall call) {
        String text = call.getString("text");
        if (text == null) {
            call.reject("Must provide text");
            return;
        }

        String durationType = call.getString("duration", "short");

        int duration = android.widget.Toast.LENGTH_SHORT;
        if ("long".equals(durationType)) {
            duration = android.widget.Toast.LENGTH_LONG;
        }
        String position = call.getString("position", "bottom");
        ToastWithDuration.show(getContext(), text, duration, position);

        call.resolve();
    }
}
