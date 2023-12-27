import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ToastWithDurationPlugin)
public class ToastWithDurationPlugin: CAPPlugin {
    private let implementation = ToastWithDuration()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

     @objc func show(_ call: CAPPluginCall) {
        guard let text = call.getString("text") else {
            call.reject("text must be provided and must be a string.")
            return
        }
        var duration = call.getInt("durationMilliseconds", 0)
        if(duration <= 0) {
            let durationType = call.getString("duration", "short")
            duration = durationType == "long" ? 3500 : 2000
        }
        let position = call.getString("position", "bottom")

        guard let viewController = bridge?.viewController else {
            call.reject("Unable to display toast!")
            return
        }
        implementation.showToast(in: viewController, text: text, duration: duration, position: position, completion: {(_) in
            call.resolve()
        })
    }
}
